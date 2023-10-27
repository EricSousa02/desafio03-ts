import { login } from "./login"

describe('login', () => {

    const mockEmail = 'teste@dio.bank'
    const mockSenha = 'teste'
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail,mockSenha)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com','senha invalida')
        expect(response).toBeFalsy()
    })
})