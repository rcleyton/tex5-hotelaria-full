<template>
	<div class="main_content">
		<div class="fixed-form">
			<section class="form_main">
				<div class="form_default">
					<legend class="section_title">Cadastrar Usuário</legend>
					<form
						class="form_geral"
						enctype="multipart/form-data"
						@submit="sendData()"
					>
						<div class="form_field">
							<label for="nome"></label>
							<input
								class="input_form"
								type="text"
								name="nome"
								id="nome"
								placeholder="Nome"
								v-model="form.nome"
							/>
						</div>
						<div class="form_field">
							<label for="telefone"></label>
							<input
								class="input_form"
								type="number"
								name="telefone"
								id="telefone"
								placeholder="telefone"
								v-model="form.telefone"
							/>
						</div>
						<div class="form_field">
							<label for="cpf"></label>
							<input
								class="input_form"
								type="number"
								name="cpf"
								id="cpf"
								placeholder="cpf"
								v-model="form.cpf"
							/>
						</div>
						<div class="form_field">
							<label for="email"></label>
							<input
								class="input_form"
								type="email"
								name="email"
								id="email"
								placeholder="email"
								v-model="form.email"
							/>
						</div>
						<div class="form_field">
							<label for="senha"></label>
							<input
								class="input_form"
								type="number"
								name="senha"
								id="senha"
								placeholder="senha"
								v-model="form.senha"
							/>
						</div>
						<div class="form_field">
							<label for="endereco_id"></label>
							<input
								class="input_form"
								type="number"
								name="endereco_id"
								id="endereco_id"
								placeholder="Id de endereço"
								v-model="form.endereco_id"
							/>
						</div>
						<button class="button_form" type="submit">Cadastrar</button>
					</form>
				</div>
			</section>
		</div>

		<!-- -->
		<div>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Telefone</th>
						<th>CPF</th>
						<th>Email</th>
						<th>Senha</th>
						<th>ID de endereço</th>
						<th>Editar</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="usuario in usuariosArr" :key="usuario.id_usuario">
						<td>{{ usuario.id_usuario }}</td>
						<td>{{ usuario.nome }}</td>
						<td>{{ usuario.telefone }}</td>
						<td>{{ usuario.cpf }}</td>
						<td>{{ usuario.email }}</td>
						<td>{{ usuario.senha }}</td>
						<td>{{ usuario.endereco_id }}</td>
						<td><a href="#">Editar</a></td>
						<td><a href="#">Excluir</a></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
export default {
	name: 'AdminUsuariosView.vue',
	data() {
		return {
			usuariosArr: '',
			form: {
				id_usuario: '',
				nome: '',
				telefone: '',
				cpf: '',
				email: '',
				senha: '',
				endereco_id: '',
			},
		};
	},

	methods: {
		async getData() {
			await axios
				.get('http://localhost:3000/api/usuarios')
				.then((res) => (this.usuariosArr = res.data))
				.catch((error) => console.log(error));
		},

		async sendData() {
			const data = {
				id_usuario: this.form.id_usuario,
				nome: this.form.nome,
				telefone: this.form.telefone,
				cpf: this.form.cpf,
				email: this.form.email,
				senha: this.form.senha,
				endereco_id: this.form.endereco_id,
			};

			await axios
				.post('http://localhost:3000/api/usuarios', data)
				.then((res) => res.data)
				.catch((error) => console.log(error));
		},
	},

	mounted() {
		this.getData();
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
@import '../sass/components/tables.scss';
</style>
