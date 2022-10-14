import User from "./User";
import Produto from "./Produto";

interface Acao{
    id: number;
    dataAcao: Date;
    qtdAcao: number;
    status: string;
    ong: User;
    produto: Produto;
    titulo: string; 
    descricao: string;
    urL_Imagem: string;
    criador: number;
}

export default Acao;