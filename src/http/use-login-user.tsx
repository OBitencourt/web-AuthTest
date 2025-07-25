import { useMutation } from "@tanstack/react-query"

type UserLoginType = {
    email: string
    password: string
}

export const useLoginUser = () => {

    return useMutation({
        mutationFn: async (data: UserLoginType) => {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result = await response.json()

            return result
        }
    })
}