<template>
	<div id="app" class="formularioCadastro">
		<form class="formulario" >
			<label class="fraseInp"> Nome Completo<input type="text" /></label>

			<label class="fraseInp">Email<input type="text"/></label>

            	<label class="fraseInp">Endereço<input type="text"/></label>

            	<label class="fraseInp">Telefone<input type="number"/></label>

            	<label class="fraseInp">CPF<input type="number"/></label>

            	<label class="fraseInp">Senha<input type="password"/></label>

            	<label class="fraseInp">Confirme a Senha<input type="password"/></label>
			<button type="submit" class="botaoCadastro">Cadastrar-se</button>
            <button type="button" class="botaoCadastro">Voltar</button>
		</form>
	</div>
</template>

<style lang="scss" scoped>
$color_1: white;
$background-color_1: #f5f5f5;
$background-color_2: #415a77;
$background-color_3: #233242;

.formularioCadastro {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 150vh;
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
.botaoCadastro{
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
