
import Header from "@/components/Header/Header"
import Link from "next/link"

export default function HomeLayout ({children}:{children:React.ReactNode}) {
    return(
    <>
        <Header>
            <li><Link href="/parkings">Inicio</Link></li>
            <li><Link href="/users">Iniciar sesión</Link></li>
            <li><Link href="/register-parking">Crear una cuenta</Link></li>
        </Header>
        {children}
    </>
    )
    
}
