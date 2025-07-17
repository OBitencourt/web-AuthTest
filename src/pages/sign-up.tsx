import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export const SignUp = () => {
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
                        <form className="flex flex-col gap-2">
                            <Label>Nome:</Label>
                            <Input placeholder="Digite seu nome"/>

                            <Label>Email:</Label>
                            <Input placeholder="Digite seu email"/>

                            <Label>Senha:</Label>
                            <Input placeholder="Digite a sua senha"/>

                            <Label>Confirme a sua senha:</Label>
                            <Input placeholder="••••••••••"/>
                        </form>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-full">
                            Cadastre-se
                        </Button>
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