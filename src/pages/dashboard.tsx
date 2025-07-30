import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth/auth-context"
import { HomeIcon, SquareSlashIcon, Settings, Apple, LogOut } from 'lucide-react'
import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"


export const Dashboard = () => {

    let navigate = useNavigate()
    const { logout } = useAuth()
    const [cookies] = useCookies(['token', 'user'])

    const { user, token } = cookies

    useEffect(() => {
        if(!token) {
            navigate("/login")
        }
    }, [token])

   
    const handleUserLogout = () => {
        logout()
        navigate({
            pathname: '/login'
        })
    }

    return (

        <>
            {
                token && (
                    
                    <div className="flex">
                        <div className="flex flex-col w-[20%] border-r-1 border-zinc-700 h-dvh text-sm text-indigo-50 p-5">
                            <p className="mb-10 text-lg">Sidebar</p>
                            <div className="w-full h-[0.1px] rounded-2xl bg-zinc-700 mb-8">
                                
                            </div>  
                            <div className="flex flex-col gap-6">

                                <Button className="gap-8" variant="outline">
                                    <HomeIcon />
                                    Home
                                </Button>
                                <Button className="gap-8" variant="outline">
                                    <SquareSlashIcon />
                                    Session
                                </Button>
                                <Button className="gap-8" variant="outline">
                                    <Apple />
                                    Products
                                </Button>
                                <div className="w-full h-[0.1px] rounded-2xl bg-zinc-700 mb-50">

                                </div>
                                <Button className="gap-8" variant="outline">
                                    <Settings />
                                    Settings
                                </Button>
                            </div>
                            
                        </div>
                        <div className="text-3xl p-8">
                            Bem vindo {user.name}!
                        </div>
                        <Button onClick={() => handleUserLogout()} variant="destructive" size="icon">
                            <LogOut />
                        </Button>
                    </div>
                ) 
            }
        </>
    )
}