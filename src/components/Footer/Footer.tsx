'use client'
import { useTranslations } from "next-intl";
import { FooterStyled, Title, ContainerLogo, ContainerSocialMedia, TitleCoppyRight, ContainerInfo, FacebookStyled, WhatsappStyled, InstagramStyled } from "./footer-style";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    const t = useTranslations('Footer');
    return (
        <FooterStyled>
            <ContainerLogo>
                <Image src="/img/chelsea.png" alt="logo-principal" width={70} height={70} />
                <Title>Ecommerce next.js</Title>
            </ContainerLogo>
            <ContainerInfo>
                <TitleCoppyRight>© Copyright 2024 {t("rights")}</TitleCoppyRight>
                <ContainerSocialMedia>
                    <Link href="https://web.facebook.com/" target="_blanck"><FacebookStyled /></Link>
                    <Link href="https://web.whatsapp.com/" target="_blanck"><WhatsappStyled /></Link>
                    <Link href="https://www.instagram.com/" target="_blanck"><InstagramStyled /></Link>
                </ContainerSocialMedia>
            </ContainerInfo>
        </FooterStyled>
    )
}

export default Footer