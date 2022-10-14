import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const login = async (url: any, dados: any, setToken: any, setDataUser: any) => {
    const resposta = await api.post(url, dados)
    setToken(resposta.data.token)
    setDataUser(JSON.stringify(resposta.data.usuario))
}

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const cadastroDoacao = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}

export const listar = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const acaoserv = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const buscaId = async(url: any, setDado: any, header: any) => { 
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const postAcao = async(url: any, dados: any, header: any) => { 
    const resposta = await api.post(url, dados, header)
}

export const put = async(url: any, dados: any, setDado: any, header: any) => { 
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async(url: any, header: any) => { 
    await api.delete(url, header)
}