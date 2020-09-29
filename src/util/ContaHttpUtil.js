const API_URL = "https://controle-contas-ht-api.herokuapp.com/contas";

import axios from "axios";

export default {
  async buscarTodos() {
    return axios.get(API_URL).then((response) => response.data);
  },

  async adicionar(conta) {
    return axios.post(API_URL, conta).then((response) => response);
  },

  async deletar(conta) {
    return axios.delete(API_URL + `/${conta._id}`).then((response) => response);
  },
};
