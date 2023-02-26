<template>
	<div id="app" class="formularioLogin">
		<form class="formulario" @submit.prevent="loginWithPassword">
			<label class="fraseInp">
				Usuário
				<input type="text" v-model="usuario" />
			</label>
			<label class="fraseInp">
				Senha
				<input type="password" v-model="senha" />
			</label>
			<button type="submit" class="botaoLogin">Entrar</button>
			<p>
				Não possui uma conta?
				<a href="#">Cadastre-se</a>
			</p>
			<p><a href="#">Esqueceu a Senha?</a></p>
		</form>
	</div>
</template>

<script>
import { registerRuntimeHelpers } from '@vue/compiler-core';

export default {
  name: "LoginView",
  data() {
    return {
      usuario: "",
      senha: "",
    };
  },
  methods: {
    loginWithPassword() {
      // Verifica se os campos de usuário e senha não estão vazios
      if (this.usuario === "" || this.senha === "") {
        alert("Por favor, preencha os campos de usuário e senha.");
        return;
      }
	  
	  // Verifica se os campos de usuário e senha possuem caracters especiais ou espaço em branco
	  if (this.usuario === ` ` || this.senha === ` `) {
		alert("Por favor, nao utilize aspas ou espaços em branco");
		return;
	  }
	  
	  // Verifica se os campos são validos
	   if (this.usuario !== "usuario@gmail.com" && this.senha !== "123") {
		alert("Usuário nao cadastrado")
		}

	
	  if (this.usuario === "usuario@gmail.com" && this.senha === "123") {
		  localStorage.usuario = this.usuario
		  localStorage.senha = this.senha
			this.$router.push("/");
			}
    },
  },
};
</script>

<style lang="scss" scoped>
$color_1: white;
$background-color_1: #f5f5f5;
$background-color_2: #415a77;
$background-color_3: #233242;

.formularioLogin {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
	max-width: 100%;
	padding: 0 1rem;
}
.formulario {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	background-color: $background-color_1;
	padding: 2rem;
	border-radius: 5px;
}
.fraseInp {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	text-align: left;
}
input{
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 2.5rem;
	height: 2.5rem;
}
.botaoLogin{
	background-color: $background-color_2;
	color: $color_1;
	padding: 0.5rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: larger;
	&:hover {
		background-color: $background-color_3;
	}
}
</style>

