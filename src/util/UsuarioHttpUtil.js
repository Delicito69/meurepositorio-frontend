const API_URL = "https://controle-contas-ht-api.herokuapp.com/usuarios";

import axios from "axios";

export default {
  async buscarTodos() {
    return axios.get(API_URL).then((response) => response.data);
  },

  async adicionar(usuario) {
    return axios.post(API_URL, usuario).then((response) => response);
  },

  async editar(usuario) {
    return axios.put(API_URL, usuario).then((response) => response);
  },
};
