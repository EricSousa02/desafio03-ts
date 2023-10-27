import { Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { AppContext } from "../components/AppContext";


const ContaInfo = () => { 

    const {isUser, isEmail} = useContext(AppContext)

    return (
        <>
            <Text fontSize='3xl' fontWeight='bold'>
                Informações da conta de {isUser}
            </Text>
            <Link to='/conta/1'>
                <Text fontSize='xl'>
                    email da Conta: {isEmail} 
                </Text>
            </Link>
            <a href='/conta/1'>
                Informações da conta
            </a>
        </>
    )
}

export default ContaInfo
