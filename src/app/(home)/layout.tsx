import changeLanguage from "@/actions/language"
import Header from "@/components/Header/Header"
import Select from "@/components/UI/Select/Select"
import Link from "next/link"

export default function HomeLayout ({children}:{children:React.ReactNode}) {
    
    return(
    <>
        <Header>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/login">Iniciar sesión</Link></li>
            <li><Link href="/sign-up">Crear una cuenta</Link></li>
        </Header>
        {children}
    </>
    )
    
}
