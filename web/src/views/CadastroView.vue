<template>
	<div class="cadastro_background">
		<div id="app" class="formularioCadastro">
			<form class="formulario">
				<label class="fraseInp"> Nome Completo<input type="text" /></label>

				<label class="fraseInp">Email<input type="text" /></label>

				<label class="fraseInp">Endereço<input type="text" /></label>

				<label class="fraseInp">Telefone<input type="number" /></label>

				<label class="fraseInp">CPF<input type="number" /></label>

				<label class="fraseInp">Senha<input type="password" /></label>

				<label class="fraseInp"
					>Confirme a Senha<input type="password"
				/></label>
				<button type="submit" class="botaoCadastro">Cadastrar-se</button>
				<button type="button" class="botaoCadastro">Voltar</button>
			</form>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

$color_1: white;

.formularioCadastro {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem;
	width: 100%;
	max-width: 100%;
	padding: 0 1rem;
}
.formulario {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.5rem;
	background-color: v.$light-gray;
	padding: 2rem;
	border-radius: 5px;
}
.fraseInp {
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	text-align: left;
}
input {
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 2.5rem;
	height: 2.5rem;
}
.botaoCadastro {
	background-color: v.$yellow;
	color: v.$dark-blue;
	padding: 0.5rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: larger;
	&:hover {
		background-color: v.$dark-blue;
		color: v.$light-gray;
	}
}

.cadastro_background {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background: v.$gradient-top,
		url(/src/assets/images/quarto_blur.jpg) fixed bottom;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	min-height: 100vh;
}
</style>
