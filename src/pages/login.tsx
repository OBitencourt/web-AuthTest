import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export const Login = () => {
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
                        <form className="flex flex-col gap-2">
                            <Label>Nome:</Label>
                            <Input placeholder="Digite seu nome"/>

                            <Label>Email:</Label>
                            <Input placeholder="Digite seu email"/>

                            <Label>Senha:</Label>
                            <Input placeholder="Digite a sua senha"/>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <span className="text-sm underline mb-3 self-end">
                            Forgot your password?
                        </span>
                        <Button className="w-full">
                            Login
                        </Button>
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