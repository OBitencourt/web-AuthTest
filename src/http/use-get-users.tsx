import { useQuery } from '@tanstack/react-query'

type GetUsersType = Array<{
    id: string
    name: string
    email: string
    password: string
}>

export const useGetUsers = () => {
    return useQuery({
        queryKey: ['get-users'],
        queryFn: async () => {

            const response = await fetch('http://localhost:8080/')


            const results: GetUsersType = await response.json()
            
            return results
        }
    })
}