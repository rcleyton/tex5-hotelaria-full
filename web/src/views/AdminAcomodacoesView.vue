<template>
	<div class="container">
		<header>
			<ul>
				<li>
					<router-link to="/cadastroAcomodacao" class="btn"
						>Cadastrar nova acomodação</router-link
					>
				</li>
			</ul>
		</header>
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
							<router-link
								to="/editarAcomodacao"
								@click="selecionarAcomodacao(acomodacao)"
								>Editar</router-link
							>
							<button
								style="display: inline-block; margin-block: auto"
								type="button"
							>
								Deletar
							</button>
						</td>
					</tr>
				</tbody>
			</table>
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
		};
	},
	methods: {
		selecionarAcomodacao(acomodacao) {
			localStorage.setItem('acomodacaoSelecionada', JSON.stringify(acomodacao));
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

.edicao__container {
	margin-block: 2rem;

	form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-inline: auto;
		max-width: 768px;
		gap: 0.5rem;

		label {
			display: block;
		}
	}
}
</style>
