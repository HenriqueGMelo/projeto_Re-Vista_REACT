import User from './User';

interface Produto{
    id: number,
    titulo: string,
    descricao: string,
    qtdProduto: number,
    qtdLimite: number,
    urL_Imagem: string,
    criador: User
}

export default Produto;