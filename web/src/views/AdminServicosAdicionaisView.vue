<template>
	<div class="main_content">
		<div class="fixed-form">
			<section class="form_main">
				<div class="form_default">
					<legend class="section_title">Cadastrar Serviço Adicional</legend>
					<form
						class="form_geral"
						style="display: flex"
						enctype="multipart/form-data"
						@submit.prevent="sendData()"
					>
						<div class="form_field">
							<label for="item"></label>
							<input
								class="input_form"
								type="text"
								name="item"
								id="item"
								placeholder="Item"
								v-model="form.item"
							/>
						</div>
						<div class="form_field">
							<label for="descricao"></label>
							<input
								class="input_form"
								type="text"
								name="descricao"
								id="descricao"
								placeholder="Descricao do produto"
								v-model="form.descricao"
							/>
						</div>
						<div class="form_field">
							<label for="valor"></label>
							<input
								class="input_form"
								type="number"
								name="valor"
								id="valor"
								placeholder="Valor do produto"
								v-model="form.valor"
							/>
						</div>
						<button class="button_form" type="submit">Cadastrar</button>
					</form>
				</div>
			</section>
		</div>
		<div>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Item</th>
						<th>Descrição</th>
						<th>Valor</th>
						<th>Editar</th>
						<th>Excluir</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="item in servicosArr" :key="item.id_servico_adicional">
						<td>{{ item.id_servico_adicional }}</td>
						<td>{{ item.item }}</td>
						<td>{{ item.descricao }}</td>
						<td>{{ item.valor }}</td>
						<td><button> <a href="{{`http://http://localhost:8080/admin-servicos-adicionais${item.id_servico_adicional}`}}"> Editar </a> </button></td>
						<td><button @click="deleteData()">Excluir</button></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'AdmimServicosAdicionais',
	data() {
		return {
			servicosArr: '',
			form: {
				idEditing : false,
				id_servico_adicional: '',
				item: '',
				descricao: '',
				valor: '',
			},
		};
	},

	methods: {
		async getData() {
			await axios
				.get('http://localhost:3000/api/servicosAdicionais')
				.then((resolve) => {
					this.servicosArr = resolve.data;
				})
				.catch((error) => console.log(error));
		},

		async sendData() {
			const data = {
				item: this.form.item,
				descricao: this.form.descricao,
				valor: this.form.valor,
			};

			await axios
				.post('http://localhost:3000/api/servicosAdicionais', data)
				.then((res) => {
					res.data
					this.getData()
					})
				.catch((error) => console.log(error));
		},

		updateData(id) {
			const data = {
				item: this.form.item,
				descricao: this.form.descricao,
				valor: this.form.valor,
			};

   			axios.put(`http://localhost:3000/api/servicosAdicionais/${id}`, data)
				.then((res) => { 
				res.data
				this.getData()
				location.reload()
				})
				.catch(error => console.log(error))
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
