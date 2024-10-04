import Header from "@/components/Header/Header"
import LogoutButton from "@/components/UI/LogoutButton/LogoutButton"
import { getCategories } from "@/services/categories";
import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6";

export default async function Layout ({children}:{children:React.ReactNode}) {
    const categories = await getCategories();
    console.log(categories);
    
    return(
    <>
        <Header>
            <li><Link href="/dashboard">Inicio</Link></li>
            {categories.map((category:string)=>
                <li>{category}</li>
            )}
            <li><FaCartShopping/></li>
            <li><LogoutButton/></li>

        </Header>
        {children}
    </>
    )
    
}
