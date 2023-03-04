<template>
	<main class="main">
		<div class="contato">
			<fieldset class="informacao_de_contato">
				<form
					class="form"
					action=""
					method="post"
					enctype="multipart/form-data"
				>
					<ul>
						<li class="nome">
							<label for="nome">Nome</label>
							<input
								type="text"
								id="nome"
								name="nome"
								placeholder="Digite seu Nome"
								required
							/>
						</li>
						<li class="email">
							<label for="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Digite seu Email"
								required
							/>
						</li>
						<li class="telefone">
							<label for="telefone">Telefone</label>
							<input
								type="number"
								id="telefone"
								name="telefone"
								placeholder="Digite seu Número"
								required
							/>
						</li>
						<li class="assunto">
							<label for="tipo_servico">Assunto</label>
							<select class="select" name="serviso" id="serviso">
								<option value="auto_select">Selecione uma Opção</option>
								<option id="cancela_reserva">Cancelamento de Reserva</option>
								<option value="ouvidoria">Ouvidoria</option>
								<option value="departamento_financeiro">
									Departamento financeiro
								</option>
								<option value="datas">Remarcação de datas</option>
								<option value="feedback">Reclamações/Opiniões</option>
							</select>
						</li>
						<li>
							<label class="mensage" for="mensagem">Mensagem</label>
							<textarea
								class="textarea"
								name="mensagem"
								id="mensagem"
								cols="30"
								rows="10"
							></textarea>
						</li>
						<li>
							<button class="button">Enviar Mensagem</button>
						</li>
					</ul>
				</form>

				<legend class="titulo_da_secao">
					<h2>Fale Conosco</h2>
				</legend>
				<div class="info">
					<ul>
						<li>R. Dep. Laércio Corte, 1501 - Panamby, São Paulo</li>
						<li>+55 (11) 9999 - 9999</li>
						<li>+55 (11) 9999 - 9999</li>
						<li>reservas@texhotel.com</li>
					</ul>
				</div>
			</fieldset>
		</div>
	</main>
</template>

<script>
import Titlecomponent from '@/components/Titlecomponent.vue';

export default {
	name: 'InicioView',
	components: {
		Titlecomponent,
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

.main {
	width: 100%;
}

.titulo_da_secao h2 {
	font-weight: 700;
	color: v.$main-blue;
}

/*form*/
.contato {
	display: flex;
	margin: auto;
	margin-top: 2%;
	color: v.$main-blue;
}
.contato ul li {
	width: 80%;
	font-weight: 700;
	font-size: 1rem;
	text-transform: uppercase;
	margin: 1rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.informacao_de_contato {
	width: 50%;
	margin: 1.5rem auto;
	align-items: center;
	border: 1px solid v.$main-blue;
}
.informacao_de_contato legend {
	text-align: center;
}

.informacao_de_contato label {
	color: v.$main-blue;
}
.info {
	margin-top: 10px;
	margin-left: 20px;
	text-transform: uppercase;
	text-align: center;
	margin: 5% 5%;
	color: v.$dark-blue;
}

.info ul li {
	font-size: 1.2rem;
	margin-bottom: 15px;
}

.informacao_de_contato ul li {
	width: 100%;
	font-weight: 700;
	font-size: 1rem;
	text-transform: uppercase;
}

.informacao_de_contato input {
	width: 70%;
	height: 45px;
	margin-top: 10px;
	padding: 20px 0;
	height: 30px;
	background-color: v.$light-gray;
	border: 0.3px solid v.$light-blue;
	text-indent: 1rem;
	text-align: center;
	border-radius: 1rem;
}
.informacao_de_contato textarea:focus,
input:focus,
select:focus {
	border: 1px solid v.$light-blue;
}
.informacao_de_contato label {
	font-size: 15px;
	display: flex;
}

.select {
	width: 40%;
	height: 45px;
	margin-top: 10px;
	border: 0.3px solid v.$light-blue;
	text-indent: 1rem;
	color: v.$dark-blue;
	background: v.$light-gray;
	border-radius: 1rem;
}

.titulo_da_secao {
	font-size: 30px;
	font-weight: bold;
}

.nome,
.email,
.telefone,
.assunto,
.mensage {
	margin: 1rem 1rem;
}

.textarea {
	width: 70%;
	height: 20%;
	margin-top: 10px;
	padding: 0.8rem;
	border: 0.5px solid v.$main-blue;
	border-radius: 1rem;
	resize: none;
	background: v.$light-gray;
}

.informacao_de_contato button {
	border: none;
	background-color: v.$main-blue;
	color: white;
	margin: auto;
	padding: 0.7rem;
	cursor: pointer;
	transition: 0.5s;
	border-radius: 5px;
}

.informacao_de_contato button:hover {
	background-color: v.$dark-blue;
}
.informacao_de_contato:hover {
	opacity: 0.9;
	transition: 0.5s;
}
</style>
