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
			<button type="submit" class="botaoLogin">Log in</button>
			<p>
				Não possui uma conta?
				<a href="#">Cadastre-se</a>
			</p>
			<p><a href="#">Esqueceu a Senha?</a></p>
		</form>
	</div>
</template>

<script>
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

      // Envia a requisição de login para o servidor
      Userfront.login({
        method: "senha",
        usuario: this.usuario,
        senha: this.senha,
      })
        .then(() => {
          // Caso o login seja bem sucedido, redireciona para a página principal
          this.$router.push("/");
        })
        .

        catch((error) => {
          // Caso contrário, exibe uma mensagem de erro
          alert("O login falhou. Por favor, verifique suas credenciais.");


          console.error(error);
        });
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
input[type='text'] {
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 2.5rem;
	height: 2.5rem;
}
input[type='password'] {
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 2.5rem;
	height: 2.5rem;
}
.botaoLogin[type='submit'] {
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

