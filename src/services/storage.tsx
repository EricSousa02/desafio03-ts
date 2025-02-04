interface IDIoBank {
    login: boolean;
    name: string;
    email: string;
}

const dioBank = {
    login: false,
    name: "teste",
    email: "teste@dio.bank" 
}

export const getAllLocalStorage = (): string | null  => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDIoBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}
