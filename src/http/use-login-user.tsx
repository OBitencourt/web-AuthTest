import { useAuth } from "@/contexts/auth/auth-context"
import { useMutation } from "@tanstack/react-query"
type UserLoginType = {
    email: string
    password: string
}

type User = {
    _id: string
    name: string
    email: string
    password: string
}

type UserLoginResponseType = {
    message: string
    user: User
    token: string
}

export const useLoginUser = () => {

    const { login } = useAuth()

    return useMutation({
        mutationFn: async (data: UserLoginType) => {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result: UserLoginResponseType = await response.json()

            try {

                const contextIsOk = await login(result.user, result.token)
                return contextIsOk
            } catch {
                throw new Error('Não foi possível usar a func login')
            }
        }
    })
}