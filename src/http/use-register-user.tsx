import { useMutation } from "@tanstack/react-query"

type RegisterUser = {
    name: string
    email: string
    password: string
}

export const useRegisterUser = () => {

    return useMutation({
        mutationFn: async (data: RegisterUser) => {
            
            const response = await fetch('', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
                
            })
            
            const result: RegisterUser = await response.json()

            return result 
        }
    })
}