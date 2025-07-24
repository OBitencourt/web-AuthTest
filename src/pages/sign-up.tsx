import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { ErrorMessage } from '@hookform/error-message'

const userRegisterSchema = z.object({
    name: z.string().nonempty('Digite um nome de usuário.'),
    email: z.string().nonempty('Digite o seu email.'),
    password: z.string().nonempty('Digite uma senha.'),
    confirm_password: z.string().nonempty("Confirme a senha inserida.")
}).refine(({ password, confirm_password}) => password === confirm_password, {
  message: "As senhas precisam ser iguais.",
  path: ["confirm_password"]
})

type UserRegisterType = z.infer<typeof userRegisterSchema>

export const SignUp = () => {

    const userRegisterForm = useForm<UserRegisterType>({
        resolver: zodResolver(userRegisterSchema),
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const handleUserRegister = (data: UserRegisterType) => {
        console.log(data)


        // userRegisterForm.reset()
    }


    return (
        <>
            <div className="flex justify-center items-center h-dvh">
                <Card className="w-1/4 flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            Cadastre-se
                        </CardTitle>
                        <CardDescription className="text-center mb-5">
                            Faça o cadastro da sua conta para ter acesso aos nossos recursos
                        </CardDescription>
                    </CardHeader>
                    <CardContent>

                        <form {...userRegisterForm} onSubmit={userRegisterForm.handleSubmit(handleUserRegister)} className="flex flex-col gap-2">
                            <Label>Nome:</Label>
                            <Input {...userRegisterForm.register("name")} placeholder="Digite seu nome"/>
                            <ErrorMessage
                                errors={userRegisterForm.formState.errors}
                                name="name"
                                render={({ message }) => <p className="text-sm text-red-400 mt-[-20px] mb-4">{message}</p>}
                            />


                            <Label>Email:</Label>
                            <Input {...userRegisterForm.register("email")} placeholder="Digite seu email"/>
                            <ErrorMessage
                                errors={userRegisterForm.formState.errors}
                                name="email"
                                render={({ message }) => <p className="text-sm text-red-400 mt-[-20px] mb-4">{message}</p>}
                            />

                            <Label>Senha:</Label>
                            <Input type="password" {...userRegisterForm.register("password")} placeholder="Digite a sua senha"/>
                            <ErrorMessage
                                errors={userRegisterForm.formState.errors}
                                name="password"
                                render={({ message }) => <p className="text-sm text-red-400 mt-[-20px] mb-4">{message}</p>}
                            />

                            <Label>Confirme a sua senha:</Label>
                            <Input type="password" {...userRegisterForm.register("confirm_password")} placeholder="Confirme a sua senha"/>
                            <ErrorMessage
                                errors={userRegisterForm.formState.errors}
                                name="confirm_password"
                                render={({ message }) => <p className="text-sm text-red-400 mt-[-20px] mb-4">{message}</p>}
                            />

                            <Button type="submit" className="w-full">
                                Cadastre-se
                            </Button>
                        </form>

                    </CardContent>
                    <CardFooter className="flex flex-col">
                        
                        <span className="text-sm mt-8 flex gap-1">
                            Já tem uma conta? 
                            
                            <Link to="/login">
                                <span className="underline">Entre aqui</span>
                            </Link>
                        </span>
                    </CardFooter>
                </Card>
            </div>
        </>
    )
}