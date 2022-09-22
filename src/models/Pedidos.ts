import User from "./User";

interface Pedidos{
    id: number;
    titulo: string; 
    descricao: string;
    qtdProduto: string;
    qtdLimite: string;
    urL_Imagem: string;
    criador: User;
    tipo: string
}

export default Pedidos;