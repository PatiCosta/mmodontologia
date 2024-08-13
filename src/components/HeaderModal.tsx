import { useDisclosure, Button, Collapse, VStack, HStack, Box, Flex, Link } from "@chakra-ui/react"
import { InstagramLogo, WhatsappLogo } from "phosphor-react"
import { Dispatch, SetStateAction } from "react"
import { BsInstagram } from "react-icons/bs"
import { RiMenuLine, RiWhatsappFill } from "react-icons/ri"
import { MenuButton } from "./Header"


export interface modalMenuProps {
    setWhatsappFocus: Dispatch<SetStateAction<boolean>>,
    setInstagramFocus: Dispatch<SetStateAction<boolean>>,
    whatsappFocus: boolean,
    instagramFocus: boolean
}

export function ModalMenu({
    setWhatsappFocus,
    setInstagramFocus,
    whatsappFocus,
    instagramFocus,
}: modalMenuProps) {

    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            <Button
                position='absolute'
                right='0'
                top={10}
                w='50px'
                mr={[8, 4, 12, '', '']}
                fontSize='1.6rem'
                bgColor='eerie'
                color='light'
                onClick={onToggle}
                _hover={{ bg: 'dim', color: "light" }}
                borderRadius='2'
            >
                <RiMenuLine />
            </Button>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    position={'absolute'}
                    w='100vw'
                    mt={4}
                    p={2}
                    left='0'
                    color='eerie'
                    bgColor={'light'}
                    shadow='md'
                    justifyContent={'center'}
                >
                    <Flex
                        w='100%'
                        p={2}
                        gap={3}
                        fontSize='1.6rem'
                        flexDir={'column'}
                        textAlign='center'
                        justifyContent='center'
                    >

                        <MenuButton id="#sobrenós" title="SOBRE NÓS" />
                        <MenuButton id="#especializações" title="ESPECIALIZAÇÕES" />
                        <MenuButton id="#galeria" title="GALERIA" />
                        <MenuButton id="#depoimentos" title="DEPOIMENTOS" />
                        <MenuButton id="#endereço" title="ENDEREÇO" />

                        <Flex mx='auto' gap={2}>
                            <Link
                                href='https://www.instagram.com/dramarinamaragno?igsh=MXkxbnI0NG52N2lo'
                                target='_blank'
                                color={'#96928B'}
                                cursor={'pointer'}
                                _hover={{ textDecoration: 'none', color: 'pink.500', transition: '300ms' }}
                            >
                                <InstagramLogo
                                    weight="duotone"
                                    size={40}
                                    style={{ cursor: 'pointer' }}
                                // onMouseEnter={() => setInstagramFocus(true)}
                                // onMouseLeave={() => setInstagramFocus(false)}
                                />
                            </Link>
                            <Link
                                href='https://wa.me/5548999600383?text=Olá, acessei o site da MMOdontologia e gostaria de mais informações'
                                target='_blank'
                                color={'#96928B'}
                                cursor={'pointer'}
                                _hover={{ textDecoration: 'none', color: 'green.400', transition: '300ms' }}
                            >
                                <WhatsappLogo
                                    weight="duotone"
                                    size={40}
                                    style={{ cursor: 'pointer' }}
                                // onMouseEnter={() => setWhatsappFocus(true)}
                                // onMouseLeave={() => setWhatsappFocus(false)}
                                />
                            </Link>

                        </Flex>
                    </Flex>
                </Box>
            </Collapse>
        </>
    )
}