export interface IUser {
    nome: string
    email: string
    senha: string
    idade: number
    endereco: {
        rua: string
        numero: number
        cidade: string
        estado: string
        pais: string
    }
    telefone: string
    ativo: boolean
    funcao: string
    dataCadastro: string
    status: {
        online: boolean
        verificado: boolean
        assinaturaAtiva: boolean
        ultimoAcesso: string
    }
}