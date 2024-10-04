"use client"
import Card from "@/components/Card/Card"
import Main from "@/components/Main/Main"
import { getProducts } from "@/services/products"
import { IProducts } from "@/types/IProducts"
import { useEffect, useState } from "react"
import './dashboard.css'


const Dashboard = ()=>{
    const [products, setProducts] = useState<IProducts[]>([]);

    useEffect(()=>{
        const fetchProduct = async()=>{
            try{
                setProducts(await getProducts())
            }catch(e){
                console.log(e);
                alert("No se pudo acceder a la informacion")
            }
        }
        fetchProduct();
    },[]);

    return(
        <>
            <Main>
                <section className="cards-section">
                    {products.map((product:IProducts)=>(
                        <Card key={product.id} product={product}/>
                    ))}
                </section>
            </Main>  
        </>
    )
}

export default Dashboard