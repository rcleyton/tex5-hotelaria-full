<template>
	<form enctype="multipart/form-data" @submit.prevent="onSubmit()" ref="form">
		<div>
			<label for="titulo"></label>
			<input
				type="text"
				id="titulo"
				placeholder="Título da acomodação"
				v-model="form.titulo"
			/>
		</div>
		<div>
			<label for="preco"></label>
			<input
				type="text"
				id="preco"
				placeholder="Preço da diária"
				v-model="form.preco"
			/>
		</div>
		<div>
			<label for="descricao"></label>
			<textarea
				name="descricao"
				id="descricao"
				cols="30"
				rows="10"
				placeholder="Descreva a acomodação"
				v-model="form.descricao"
			></textarea>
		</div>
		<div>
			<label for="imagem"></label>
			<input
				type="file"
				name="imagem"
				id="imagem"
				accept="image/*"
				ref="image"
				@change="onSelect"
			/>
		</div>
		<button type="submit">Cadastrar</button>
	</form>
</template>
<script>
import { mapActions } from 'vuex';
import axios from 'axios';

export default {
	name: 'CadastroAcomodacaoView',
	data() {
		return {
			form: {
				titulo: '',
				preco: '',
				descricao: '',
				imagem: ''
			},
		};
	},
	methods: {
		...mapActions(['handleInsertAcomodacao']),
		async onSubmit() {
			const formData = new FormData();
			formData.append('imagem', this.form.imagem);
			formData.append('titulo', this.form.titulo);
			formData.append('preco', this.form.preco);
			formData.append('descricao', this.form.descricao);

			try {
				await axios.post('http://localhost:3000/api/acomodacoes', formData);
			} catch (err) {
				console.log(err);
			}
		},
		onSelect() {
			const file = this.$refs.image.files[0];
			this.form.imagem = file;
			console.log(file);
		}
	},
};
</script>
<style lang="scss"></style>

