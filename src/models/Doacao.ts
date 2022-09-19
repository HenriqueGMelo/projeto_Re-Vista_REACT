import User from "./User";

interface Doacao{
    id: number;
    titulo: string; 
    descricao: string;
    qtdProduto: string;
    qtdLimite: string;
    urL_Imagem: string;
    criador: User;
}

export default Doacao;