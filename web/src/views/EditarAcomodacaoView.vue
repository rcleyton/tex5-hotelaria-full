<template lang="js">
		<header>
		<ul>
			<li>
				<router-link to="/AdminAcomodacoes" class="btn">Acomodações</router-link>
			</li>
		</ul>
	</header>
	<div class="edicao__container" id="modal">
		<form @submit.prevent="editarAcomodacao()">
			<div>
				<label for="id">ID</label>
				<input type="text" readonly v-model="acomodacaoSelecionada.id_acomodacao" />
			</div>
			<div>
				<label for="titulo">Título</label>
				<input type="text" v-model="acomodacaoSelecionada.titulo" />
			</div>
			<div>
				<label for="descricao">Descrição</label>
				<textarea
					name="descricao"
					id="descricao"
					cols="30"
					rows="5"
					v-model="acomodacaoSelecionada.descricao"
				></textarea>
			</div>
			<div>
				<label for="preco">Preço</label>
				<input type="text" id="preco" v-model="acomodacaoSelecionada.preco" />
			</div>
			<div>
				<label for="status">Status</label>
				<select name="status" id="status" v-model="acomodacaoSelecionada.status">
					<option value="0">Indisponível</option>
					<option value="1">Disponível</option>
				</select>
			</div>
			<div>
				<label for="imagem">Selecione a imagem da acomodação:</label>
				<input
					type="file"
					name="imagem"
					id="imagem"
					accept="image/*"
					ref="image"
					@change="onSelect"
				/>
			</div>
			<button type="submit" :disabled="acomodacaoSelecionada === null">Atualizar acomodação</button>
		</form>
	</div>
</template>
<script>
import router from '@/router';
import axios from 'axios';

export default {
	name: 'EditarAcomodacaoView',
	data() {
		return {
			acomodacaoSelecionada: {
				id_acomodacao: '',
				titulo: '',
				preco: '',
				descricao: '',
				status: '',
				imagem: '',
			},
		};
	},
	methods: {
		async editarAcomodacao() {
			const confirm = window.confirm(
				'Deseja atualizar acomodação: ' + this.acomodacaoSelecionada.id_acomodacao + '?'
			);

			if (confirm) {
				try {
					await axios
						.put(
							`http://localhost:3000/api/acomodacoes/${this.acomodacaoSelecionada.id_acomodacao}`,
							this.acomodacaoSelecionada
						)
						.then((res) => {
							router.push('/adminAcomodacoes');
						});
				} catch (err) {
					console.error(err);
				}
			}
		},
		onSelect() {
			const file = this.$refs.image.files[0];
			this.form.imagem = file;
		},
	},
	mounted: function () {
		if (localStorage.getItem('acomodacaoSelecionada')) {
			this.acomodacaoSelecionada = JSON.parse(
				localStorage.getItem('acomodacaoSelecionada')
			);
		} else {
			router.push('/adminAcomodacoes');
		}
	},
	unmounted: function () {
		localStorage.removeItem('acomodacaoSelecionada');
	},
};
</script>
<style lang="scss"></style>
