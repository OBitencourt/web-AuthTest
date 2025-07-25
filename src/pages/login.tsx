import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from '@hookform/error-message'
import { useForm } from 'react-hook-form'
import { useLoginUser } from "@/http/use-login-user"

const userLoginSchema = z.object({
    email: z.string().nonempty("Digite o seu email."),
    password: z.string().nonempty("Digite a sua senha.")
})

type UserLoginType = z.infer<typeof userLoginSchema>

export const Login = () => {

    const { mutateAsync: loginUser } = useLoginUser()

    const userLoginForm = useForm<UserLoginType>({
        resolver: zodResolver(userLoginSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    async function handleUserLogin (data: UserLoginType) {

        await loginUser({
            email: data.email,
            password: data.password
        })
        

        userLoginForm.reset()
    }


    return (
        <>
            <div className="flex justify-center items-center h-dvh">
                <Card className="w-1/4 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            Login
                        </CardTitle>
                        <CardDescription className="text-center mb-5">
                            Faça login para ter acesso às suas informações
                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                        <form onSubmit={userLoginForm.handleSubmit(handleUserLogin)} {...userLoginForm} className="flex flex-col gap-2">

                            <Label>Email:</Label>
                            <Input {...userLoginForm.register("email")} placeholder="Digite seu email"/>
                            <ErrorMessage 
                                name="email"
                                errors={userLoginForm.formState.errors}
                                render={({message}) => <p className="text-sm text-red-400 mt-[-20px] mb-4">{message}</p>}
                            />


                            <Label>Senha:</Label>
                            <Input {...userLoginForm.register("password")} placeholder="Digite a sua senha"/>
                            <ErrorMessage 
                                name="password"
                                errors={userLoginForm.formState.errors}
                                render={({message}) => <p className="text-sm text-red-400 mt-[-20px] mb-4">{message}</p>}
                            />

                            <Button type="submit" className="w-full">
                                Login
                            </Button>

                        </form>

                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <span className="text-sm underline mb-3 self-end">
                            Forgot your password?
                        </span>
                        
                        <span className="text-sm mt-8 flex gap-1">
                            Dont have an account? 

                            <Link to="/">
                                <span className="underline">Sign up</span>
                            </Link>
                        </span>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}