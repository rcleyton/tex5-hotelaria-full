<template>
<section>
	<div>
		<form style="display:flex" enctype="multipart/form-data" @submit="sendData()" >
			<div style="margin-right:1rem">
				<label for="item"></label>
				<input type="text"
				name="item"
				id="item"
				placeholder="Item"
				v-model="form.item">
			</div>
			<div style="margin-right:1rem">
				<label for="descricao"></label>
				<input type="text"
				name="descricao"
				id="descricao"
				placeholder="Descricao do produto"
				v-model="form.descricao">
			</div>
			<div style="margin-right:1rem">
				<label for="valor"></label>
				<input type="number"
				name="valor"
				id="valor"
				placeholder="Valor do produto"
				v-model="form.valor">
			</div>
			<div style="margin-right:1rem">
				<label for="local"></label>
				<input type="text"
				name="local"
				id="local"
				placeholder="Local de venda"
				v-model="form.local">
			</div>	
			<button type="submit">Cadastrar</button>	
		</form>
	</div>
	<div>
		<table>
			<thead>
				<tr>
					<th>Id</th>
					<th>Item</th>
					<th>Descrição</th>
					<th>Valor</th>
					<th>Local</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in servicosArr" :key="item.id_servico_adicional">
					<td style="text-align:center" > {{ item.id_servico_adicional }} </td>
					<td style="text-align:center" > {{ item.item }} </td>
					<td style="text-align:center" > {{ item.descricao }} </td>
					<td style="text-align:center" > {{ item.valor }} </td>
					<td style="text-align:center" > {{ item.local }} </td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
    
</template>

<script>
import axios from 'axios'
export default {
	name: 'AdmimServicosAdicionais',
	data() {
		return {
			servicosArr: "",
			form: {
				id_servico_adicional : "",
				item : "",
				descricao : "",
				valor : "",
				local : ""
			}
		}
	},

	methods: {
		async getData() {
			await axios.get("http://localhost:3000/api/servicosAdicionais")
				.then((resolve) => {
					this.servicosArr = resolve.data
				})
				.catch(error => console.log(error))
		},

		async sendData() {
			const data = {
				item: this.form.item,
				descricao: this.form.descricao,
				valor: this.form.valor,
				local: this.form.local
			}

			await axios.post("http://localhost:3000/api/servicosAdicionais",data)
				.then((res) => res.data)
				.catch((error) => console.log(error))
			
		}
	},

	mounted() {
		this.getData()
		
	}
}




</script>

<style>

</style>