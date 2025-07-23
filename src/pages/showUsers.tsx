import { useGetUsers } from "@/http/use-get-users"

export const ShowUsers = () => {

    const { data } = useGetUsers()
    console.log(data)

    return (
        <>

        </>
    )
}