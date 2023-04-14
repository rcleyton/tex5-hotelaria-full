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
						<th>Editar</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="usuario in completeArr" :key="usuario.id_usuario">
						<td>{{ usuario.id_usuario }}</td>
						<td>{{ usuario.nome }}</td>
						<td>{{ usuario.telefone }}</td>
						<td>{{ usuario.cpf }}</td>
						<td>{{ usuario.email }}</td>
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
			enderecoArr: '',
			completeArr: [],
			form: {
				id_usuario: '',
				nome: '',
				telefone: '',
				cpf: '',
				email: '',
				senha: '',
				cidade: '',
				estado: '',
				numero: '',
				rua: '',
				bairro: '',
				complemento: '',
			},
		};
	},

	methods: {
		async getData() {
  			const usuariosRes = await axios.get('http://localhost:3000/api/usuarios');
  			const enderecoRes = await axios.get('http://localhost:3000/api/enderecos');
  			const usuariosArr = usuariosRes.data;
  			const enderecoArr = enderecoRes.data;
  			const completeArr = usuariosArr.map((usuario) => {
    			const endereco = enderecoArr.find((e) => e.id_endereco === usuario.id_endereco);
    			return { ...usuario, ...endereco };
  				});
  			this.completeArr = completeArr;
			console.log(this.completeArr);
		},

		async sendData() {
			const data = {
				id_usuario: this.form.id_usuario,
				nome: this.form.nome,
				telefone: this.form.telefone,
				cpf: this.form.cpf,
				email: this.form.email,
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
