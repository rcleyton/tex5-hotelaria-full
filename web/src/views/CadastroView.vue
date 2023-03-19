<template>
	<div class="cadastro_background">
		<div id="app" class="formularioCadastro">
			<form class="formulario">
				<fieldset class="fieldset_form">
					<legend>Dados pessoais</legend>
					<label class="fraseInp"> Nome Completo<input type="text" /></label>

					<label class="fraseInp">Email<input type="text" /></label>

					<label class="fraseInp">Telefone<input type="number" /></label>

					<label class="fraseInp">CPF<input type="number" /></label>
				</fieldset>

				<fieldset class="fieldset_form">
					<legend>Endereço</legend>
					<select
						name="estado"
						id="estado"
						class="select"
						v-model="selectedState"
					>
						<option hidden disabled value="">Selecione um estado</option>
						<option
							v-for="estado in estados"
							:key="estado.uf"
							:value="estado.uf"
						>
							{{ estado.nome }}
						</option>
					</select>

					<label class="fraseInp">Cidade<input type="text" /></label>

					<label class="fraseInp">Rua<input type="text" /></label>

					<label class="fraseInp">Bairro<input type="text" /></label>

					<label class="fraseInp">Número<input type="number" /></label>

					<label class="fraseInp">Complemento<input type="text" /></label>

					<label class="fraseInp">CEP<input type="number" /></label>
				</fieldset>
				<fieldset class="fieldset_form">
					<legend>Crie sua senha</legend>
					<label class="fraseInp">Senha<input type="password" /></label>

					<label class="fraseInp"
						>Confirme a Senha<input type="password"
					/></label>
				</fieldset>
				<div class="button_form">
					<button type="submit" class="botaoCadastro">Cadastrar-se</button>
					<button type="button" class="botaoCadastro voltar">Voltar</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { estados } from '@/components/constants/estados';

export default {
	data() {
		return {
			selectedState: '',
			estados: estados,
		};
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

$color_1: white;

.formularioCadastro {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 2rem;
	width: 100%;
	padding: 0 1rem;
}
.formulario {
	width: 50%;
	align-items: center;
	gap: 1.5rem;
	background-color: hsl(60, 6%, 94%);
	padding: 2rem;
	border-radius: 5px;
	flex-direction: row;
	justify-content: space-evenly;

	@media (max-width: 1400px) {
		width: 80vw;
		padding: 1rem;
	}
}

.fieldset_form {
	display: flex;
	flex-wrap: wrap;
	max-width: 100%;
	align-items: center;
	padding: 2rem;
	gap: 1rem;
	flex-direction: row;
	justify-content: space-evenly;
	margin: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: stretch;
		padding: 1rem;
	}
}

.fraseInp {
	flex-basis: 40%;
}
input {
	padding: 0.5rem;
	border: none;
	border-bottom: 2px solid #ccc;
	width: 100%;
	font-size: 1.3rem;
	height: 2.5rem;
}
.botaoCadastro {
	background-color: v.$yellow;
	color: v.$dark-blue;
	width: 50%;
	padding: 1rem;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	font-size: 1.2rem;
	&:hover {
		background-color: v.$dark-blue;
		color: v.$light-gray;
	}

	@media (max-width: 768px) {
		width: 80%;
	}
}

.voltar {
	max-width: 20%;
	color: v.$light-gray;
	background-color: v.$dark-blue;
	&:hover {
		background-color: v.$yellow;
		color: v.$dark-blue;
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

.select {
	width: 40%;
	padding: 0.8rem;
	margin-top: 10px;
	border: 0.3px solid v.$light-blue;
	text-indent: 1rem;
	color: v.$dark-blue;
	border-radius: 1rem;

	@media (max-width: 768px) {
		width: 100%;
	}
}

.button_form {
	gap: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
