import Header from "@/components/Header/Header"
import LogoutButton from "@/components/UI/LogoutButton/LogoutButton"
import Link from "next/link"

export default function Layout ({children}:{children:React.ReactNode}) {
    return(
    <>
        <Header>
            <li><Link href="/dashboard">Inicio</Link></li>
            <li><LogoutButton/></li>

        </Header>
        {children}
    </>
    )
    
}
