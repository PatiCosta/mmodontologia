import { Flex, Link, Text } from "@chakra-ui/react";
import { BsWhatsapp } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { useState, useEffect } from "react";

export default function WhatsButton() {
    
    return (
        <Link className="zap-tag" target={'_blank'} href={'https://wa.me/+5548999600383?text=Olá, acessei o site da MMOdontologia e gostaria de mais informações'}>
        
        <Flex zIndex={0} bg='#25D366' color="#fffafa"
        fontSize='1.8rem' borderRadius={'full'} p={4} 
        position='fixed'bottom={8} right={8}
        _hover={{ transition:' 400ms', fontSize:'2.4rem'}}
        cursor='pointer'>
            <BsWhatsapp/>
        </Flex>
        </Link>
    )
}
