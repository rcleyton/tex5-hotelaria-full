<template>
	<div class="main_content">
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
				senha: ''
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
				senha: this.form.senha
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
