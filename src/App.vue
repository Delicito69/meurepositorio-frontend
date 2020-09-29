<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      
      <v-list dense>
        <v-list-item link :to="item.rota" v-for="(item,index) in rotas"  :key="index">
          <v-list-item-action>
            <v-icon>{{item.icone}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.nome}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
    </v-navigation-drawer>

    <v-app-bar
      app
      color="blue"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Controle de Contas</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <router-view> </router-view>
    </v-main>
    
    <v-footer
      color="blue"
      app
    >
      <span class="white--text">Fabrica Online - by João Mateus🤡 &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      rotas:[
        {
          nome: "Home",
          icone: "mdi-home",
          rota: "/"
        },
        {
          nome: "Contas",
          icone: "mdi-cash",
          rota: "/contas"
        },
        {
          nome: "Usuários",
          icone: "mdi-account",
          rota: "/usuarios"
        },
        {
          nome: "Relatórios",
          icone: "mdi-align-vertical-bottom",
          rota: "/relatorios"
        }
      ]
    }),
  }
</script>