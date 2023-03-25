<template>
	<div class="container">
		<div class="table-responsive">
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Imagem</th>
						<th>Título</th>
						<th>Descrição</th>
						<th>Preço</th>
						<th>Status</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="(acomodacao, index) in acomodacoes"
						:key="acomodacao.acomodacao_id"
					>
						<td>{{ acomodacao.acomodacao_id }}</td>
						<td>{{ acomodacao.imagem }}</td>
						<td>{{ acomodacao.titulo }}</td>
						<td>
							{{ acomodacao.descricao }}
						</td>
						<td>{{ acomodacao.preco }}</td>
						<td>
							{{ acomodacao.status === 0 ? 'Indisponível' : 'Disponível' }}
						</td>
						<td>
							<button
								type="button"
								@click="selecionarAcomodacao(acomodacao)"
								aria-controls="modal"
							>
								Editar
							</button>
							<button type="button">Deletar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="modal" id="modal">
			<form @submit.prevent="editarAcomodacao()">
				<div>
					<label for="id">ID</label>
					<input type="text" ref="id_acomodacao" readonly />
				</div>
				<div>
					<label for="titulo">Título</label>
					<input type="text" ref="titulo" />
				</div>
				<div>
					<label for="descricao">Descrição</label>
					<textarea
						name="descricao"
						id="descricao"
						cols="30"
						rows="5"
						ref="descricao"
					></textarea>
				</div>
				<div>
					<label for="preco">Preço</label>
					<input type="text" id="preco" ref="preco" />
				</div>
				<div>
					<label for="status">Status</label>
					<select name="status" id="status" ref="status">
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
				<button type="submit">Atualizar acomodação</button>
			</form>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

export default {
	name: 'AdminAcomodacoesView',
	data() {
		return {
			acomodacoes: [],
			form: {
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
		onSelect() {
			const file = this.$refs.image.files[0];
			this.form.imagem = file;
			console.log(file);
		},
		selecionarAcomodacao(acomodacao) {
			this.$refs.id_acomodacao.value = acomodacao.id_acomodacao;
			this.$refs.titulo.value = acomodacao.titulo;
			this.$refs.descricao.value = acomodacao.descricao;
			this.$refs.preco.value = acomodacao.preco;
			this.$refs.status.value = acomodacao.status;
		},
		async editarAcomodacao() {
			const confirm = window.confirm(
				'Deseja atualizar acomodação: ' + this.$refs.id_acomodacao.value + '?'
			);

			if (confirm) {
				this.form.id_acomodacao = this.$refs.id_acomodacao.value;
				this.form.titulo = this.$refs.titulo.value;
				this.form.preco = this.$refs.preco.value;
				this.form.descricao = this.$refs.descricao.value;
				this.form.status = this.$refs.status.value;

				try {
					await axios
						.put(
							`http://localhost:3000/api/acomodacoes/${this.$refs.id_acomodacao.value}`,
							this.form
						)
						.then((res) => console.log(res));
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
		axios
			.get('http://localhost:3000/api/acomodacoes')
			.then((res) => (this.acomodacoes = res.data));
	},
};
</script>
<style lang="scss">
@import '../sass/components/_forms.scss';
.container {
	max-width: 1120px;
	margin-inline: auto;
}

.table-responsive {
	overflow: scroll;
}
</style>
