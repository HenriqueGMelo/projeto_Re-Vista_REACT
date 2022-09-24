import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState, ChangeEvent } from "react";
import { AppBar, Button, Tab, Tabs } from "@material-ui/core";
import { Box } from "@mui/material";
import "./minhaConta.css";
import useLocalStorage from "react-use-localstorage";
import { useNavigate } from "react-router-dom";
import User from "../../models/User";
import { buscaId, put } from "../../services/Service";
import { toast } from "react-toastify";
import { Search } from "@material-ui/icons";
import { TabContext, TabPanel } from '@material-ui/lab';
import AutenticarUsuarioSenhaDTO from "../../models/AutenticarUsuarioSenhaDTO";
// import HistoricoDoacao from "../../components/doacoes/historicoDoacao/HistoricoDoacao";
import AtualizarUsuarioDTO from "../../models/AtualizarUsuarioDTO";
import AtualizarSenhaUsuarioDTO from "../../models/AtualizarSenhaUsuarioDTO";

function MinhaConta() {

  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');

  const [idUsuarios, setIdUsuarios] = useLocalStorage('id');
  const [value, setValue] = useState('1')

  // DTO para manipulação e update de dados do usuário
  const [user, setUser] = useState<AtualizarUsuarioDTO>({
    id: 0,
    nome: "",
    email: "",
    endereco: "",
});

  // DTO para update de senha do usuário
  const [userSenha, setUserSenha] = useState<AtualizarSenhaUsuarioDTO>({
    id: 0,
    senhaAntiga: "",
    senhaNova: ""
  })

  // DTO para manipulação e autenticação de senha
  const [confirmarSenha, setConfirmarSenha] = useState<AutenticarUsuarioSenhaDTO>({
    senhaAntiga: "",
    senhaNova: "",
    confirmarSenhaNova: ""
  })

  useEffect(() => {
    if (token === '') {
      navigate('/login')
    }
    getProfile();
  }, [token])


  function updatedModel(e: ChangeEvent<HTMLInputElement>) {

    setUser({
      ...user,
      [e.target.name]: e.target.value
  })
  }

  function updatedModelSenha(e: ChangeEvent<HTMLInputElement>) {

    setConfirmarSenha({
      ...confirmarSenha,
      [e.target.name]: e.target.value
    })
  }

  async function getProfile() {
    await buscaId(`/api/Usuarios/id/${idUsuarios}`, setUser, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (user.email !== "" && user.nome !== "" && user.endereco !== "") {
      await put(`/api/Usuarios/`, user, setUser,
        {
          headers: {
            'Authorization': token
          }
        })
      toast.success('Usuario atualizado com sucesso', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    else {
      toast.error('Dados inconsistentes. Favor verificar as informações inseridas.', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  async function onSubmitSenha(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    if (confirmarSenha.senhaNova !== "" && confirmarSenha.senhaNova === confirmarSenha.confirmarSenhaNova && confirmarSenha.senhaAntiga !== "") {
      userSenha.id = user.id;
      userSenha.senhaAntiga = confirmarSenha.senhaAntiga;
      userSenha.senhaNova = confirmarSenha.senhaNova;

      try {
        await put(`/api/Usuarios/`, userSenha, setUserSenha,
          {
            headers: {
              'Authorization': token
            }
          });
        toast.success('Usuario atualizado com sucesso', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      }
      catch (exception) {
        toast.error('Senha antiga incorreta.', {
          position: "bottom-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress: undefined,
        });
      }
    }
    else {
      toast.error('Dados inconsistentes. Favor verificar as informações inseridas.', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
  }

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <>
      {/* Container da pagina inteira */}
      <div id="perfil-container">

        {/* Container da esquerda */}
        <div id="perfil-container-left">

          {/* Container da foto e nome*/}
          <div id="perfil-container-left-top">
            <Avatar
              id="perfil-avatar"
              alt="Imagem Usuario"
              src={""}
              variant="circular"
            />
            <h1>{user.nome}</h1>
          </div>

          {/* Container do historico de doacoes
          <section id="section-doacoes">
            <label id="label-checkbox" htmlFor="checkbox">
              <h4>Minhas Solicitações</h4>
              <i className="fa-solid fa-chevron-right"></i>
            </label>
            <input type="checkbox" name="checkbox" id="checkbox" />
            
            <div id="perfil-container-left-bottom">
              <div>

                <div id="cardsd">
                  <HistoricoDoacao />
                </div>

              </div>
            </div>
          </section> */}

        </div>

        {/* Container da direita */}
        <div id="perfil-container-right">
          <div id="perfil-container-right-top">
            <h1 className="h1-dados">Dados Usuario</h1>
            <form onSubmit={onSubmit}>
              {/* <div className="input-group-perfil">
                <label>Documento</label>
                <input
                  type="text"
                  id="documento"
                  name="documento"
                  value={user.documento}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                />
                <div id="txtDocumento"></div>
              </div> */}

              <div className="input-group-perfil">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                />
                <div id="txtEmail"></div>
              </div>



              <div className="input-group-perfil">
                <label htmlFor="nome"> Nome do Usuario </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Digite o seu nome completo"
                  value={user.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}

                />
                <div id="txtNome"></div>
              </div>

              <div className="input-group-perfil">
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="Digite o Endereço"
                  value={user.endereco}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}

                />
                <div id="txtEndereco"></div>
              </div>

              {/* <div className="input-group-perfil">
                <label htmlFor="foto">Foto</label>
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  placeholder="Digite a URL da imagem"
                  value={user.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}

                />
                <div id="txtEndereco"></div>
              </div> */}

              <Box id="box-botao-atualizar-dados">
                <Button id="botao-atualizar-dados" type="submit">
                  <p>Atualizar Dados</p>
                </Button>
              </Box>
            </form>
          </div>
          <div id="perfil-container-right-bottom">
            <h1 className="h1-senha">Alterar senha</h1>
            <form onSubmit={onSubmitSenha}>

              <div className="input-group-perfil">
                <label> Senha Atual </label>
                <input
                  type="password"
                  id="senhaAntiga"
                  placeholder="Digite sua senha atual"
                  name="senhaAntiga"
                  value={confirmarSenha.senhaAntiga}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelSenha(e)}
                />
                <div id="txtSenha"></div>
              </div>

              <div className="input-group-perfil">
                <label>Senha</label>
                <input
                  type="password"
                  id="senhaNova"
                  name="senhaNova"
                  placeholder="Digite sua nova senha"
                  value={confirmarSenha.senhaNova}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelSenha(e)}
                />
                <div id="txtNovaSenha"></div>
              </div>

              <div className="input-group-perfil">
                <label> Confirmar senha</label>
                <input
                  type="password"
                  id="confirmarSenhaNova"
                  name="confirmarSenhaNova"
                  placeholder="Confirme sua nova senha"
                  value={confirmarSenha.confirmarSenhaNova}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModelSenha(e)}
                />
                <div id="txtConfirmaSenha"></div>
              </div>

              <Box id="box-botao-atualizar-senha">
                <Button id="botao-atualizar-senha" type="submit">
                  <p>Atualizar senha</p>
                </Button>
              </Box>
            </form>

          </div>
        </div>
      </div>
    </>
  );
}

export default MinhaConta;