"use client"
import Link from "next/link"
import Header from "../Header/Header"
import { FaCartShopping } from "react-icons/fa6"
import LogoutButton from "../UI/LogoutButton/LogoutButton"
import { useEffect, useState } from "react"
import { getCategories } from "@/services/categories"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

const ProtectedHeader = () => {
    const cart = useAppSelector(state => state.cartReducer.cart);

    const [categories, setCategories] = useState<string[]>([])
    useEffect(()=>{
        const fechCategories = async()=>{
            try{
                setCategories(await getCategories())
            }catch(e){
                console.log(e)
            }
        }
        fechCategories()
    },[])

    return(
        <Header>
            <li><Link href="/store">Inicio</Link></li>
            {categories.map((category:string)=>
                <li key={category}><Link href={`/store/${category}`}>{category} </Link></li>
            )}
            <li style={{display:'flex', justifyContent:'center',alignItems: 'center', gap:'5px'}}>{cart.length} <FaCartShopping/></li>
            <li><LogoutButton/></li>

        </Header>
    )   
}

export default ProtectedHeader