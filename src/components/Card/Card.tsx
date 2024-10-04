import { IProducts } from "@/types/IProducts"
import { AddButton, CardContainer, ImgCard, ImgCardContainer, InfoCardContainer, TitleCard } from "./Card-style"
import { BsCartPlus } from "react-icons/bs"

interface CardProps {
    product: IProducts; 
  }

const Card: React.FC<CardProps> = ({product})=>{
    return(
        <>
            <CardContainer>
                <ImgCardContainer>
                    <ImgCard src={product.image} alt="producto"/>
                </ImgCardContainer>
                <InfoCardContainer>
                    <TitleCard>{product.title}</TitleCard>
                    <p>$ 800.000</p>
                </InfoCardContainer>
                <AddButton> <BsCartPlus /></AddButton>
            </CardContainer>
        </>
    )
}

export default Card