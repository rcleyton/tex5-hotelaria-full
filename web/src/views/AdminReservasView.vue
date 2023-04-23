<template>
	<div class="main_content">
		<div class="fixed-form">
			<section class="form_main">
				<div class="form_default">
					<legend class="section_title">Cadastrar Reserva</legend>
					<form class="form_geral" @submit.prevent="sendData()">
						<div class="form_field">
							<label for="check_in"></label>
							<input
								class="input_form"
								type="date"
								name="check_in"
								id="check_in"
								placeholder="Check in"
								v-model="form.check_in"
							/>
						</div>
						<div class="form_field">
							<label for="check_out"></label>
							<input
								class="input_form"
								type="date"
								name="check_out"
								id="check_out"
								placeholder="Check out"
								v-model="form.check_out"
							/>
						</div>
						<div class="form_field">
							<label for="quantidade_pessoas"></label>
							<input
								class="input_form"
								type="number"
								name="quantidade_pessoas"
								id="quantidade_pessoas"
								placeholder="Quantidade de pessoas"
								v-model="form.quantidade_pessoas"
							/>
						</div>
						<div class="form_field">
							<label for="acomodacao"></label>
							<select
								id="acomodacao"
								name="acomodacao"
								v-model="form.id_acomodacao"
							>
								<option value="">Selecione uma acomodação</option>
								<option
									v-for="acomodacao in acomodacoesArr"
									:value="acomodacao.id_acomodacao"
								>
									{{ acomodacao.titulo }}
								</option>
							</select>
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
						<th>ID da reserva</th>
						<th>Check in</th>
						<th>Check out</th>
						<th>Quantdade de pessoas</th>
						<th>Total</th>
						<th>Total de desconto</th>
						<th>Confirmação</th>
						<th>Data de confirmação</th>
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="reserva in reservasArr" :key="reserva.id_reserva">
						<td>{{ reserva.id_reserva }}</td>
						<td>{{ formataData(reserva.check_in) }}</td>
						<td>{{ formataData(reserva.check_out) }}</td>
						<td>{{ reserva.quantidade_pessoas }}</td>
						<td>{{ reserva.total }}</td>
						<td>{{ reserva.total_desconto }}</td>
						<td>{{ reserva.confirmacao ? 'Confirmado' : 'Pendente' }}</td>
						<td>
							{{
								reserva.data_confirmacao
									? formataData(reserva.data_confirmacao)
									: ''
							}}
						</td>
						<td>
							<button
								type="button"
								@click="confirmarReserva(reserva.id_reserva)"
							>
								Confirmar
							</button>
							<button type="button">Cancelar</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { formataData } from '@/helpers/formataData';
import { mapGetters } from 'vuex';
export default {
	name: 'AdminReservasView',
	data() {
		return {
			reservasArr: '',
			form: {
				check_in: '',
				check_out: '',
				quantidade_pessoas: '',
				id_acomodacao: '',
				id_usuario: '',
			},
			acomodacoesArr: [],
			formataData,
		};
	},
	computed: mapGetters(['usuario']),
	methods: {
		confirmarReserva(id_reserva) {
			const confirmacao = window.confirm('Deseja confirmar reserva?');
			if (confirmacao) {
				axios
					.put('http://localhost:3000/api/reservas/confirmar/' + id_reserva)
					.then((res) => {
						const reserva = this.reservasArr.find(
							(reserva) => reserva.id_reserva == id_reserva
						);
						reserva.confirmacao = 1;
						reserva.data_confirmacao = new Date();
					})
					.catch((err) => {
						alert(err.response.data.message);
					});
			}
		},

		getData() {
			axios
				.get('http://localhost:3000/api/reservas')
				.then((res) => (this.reservasArr = res.data))
				.catch((error) => console.log(error));
		},

		sendData() {
			const data = {
				check_in: this.form.check_in,
				check_out: this.form.check_out,
				quantidade_pessoas: this.form.quantidade_pessoas,
				id_acomodacao: this.form.id_acomodacao,
				id_usuario: this.usuario.id_usuario,
			};

			axios
				.post('http://localhost:3000/api/reservas', data)
				.then((res) => res.data)
				.catch((erro) => console.log(erro));
		},
	},

	mounted() {
		this.getData();

		axios
			.get('http://localhost:3000/api/acomodacoes')
			.then((res) => (this.acomodacoesArr = res.data));
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

table {
	font-family: Arial, sans-serif;
	border-collapse: collapse;
	margin: auto;
	overflow-x: auto;
}
thead {
	th {
		background-color: v.$dark-blue;
		color: v.$light-gray;
		padding: 12px;
		text-align: center;
		font-size: 14px;
		font-weight: 500;
		border: 1px solid v.$light-gray;
	}
}
tbody {
	tr {
		&:nth-child(even) {
			background-color: v.$light-gray;
			td {
				border: 1px solid v.$white;
			}
		}
	}
	td {
		border: 1px solid v.$light-gray;
		text-align: center;
		padding: 12px;
		font-size: 14px;
		color: v.$dark-blue;

		a {
			color: v.$yellow;
			&:hover {
				color: v.$light-yellow;
			}
		}
		&:last-child {
			border: 1px solid v.$white;

			a {
				display: inline-block;
				padding: 6px 12px;
				border-radius: 4px;
				font-size: 14px;
				text-decoration: none;
				color: v.$white;
				background-color: v.$main-blue;
				transition: background-color 0.2s ease-in-out;
				&:hover {
					background-color: v.$light-blue;
				}
			}
		}
	}
}

.fixed-form {
	align-items: center;
}
.form_main {
	background-color: hsl(60, 6%, 94%);
	flex-direction: row;
	justify-content: space-evenly;

	@media (max-width: 600px) {
		padding: 2rem 0 3rem 0;
		-moz-column-gap: 1rem;
		gap: 1rem;
		flex-direction: column;
		align-content: center;
		align-items: center;
	}

	.form_default {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		gap: 1rem;
		margin: 1rem;
		align-items: center;

		@media (max-width: 600px) {
			padding: 1rem 0 1rem 0;
			-moz-column-gap: 1rem;
			gap: 1.4rem;
			flex-direction: column;
			align-content: center;
			align-items: center;
		}

		.section_title {
			text-align: center;
			font-size: 2rem;
			font-weight: bold;
			margin-bottom: 2rem;
		}

		.form_geral {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 0.5rem;

			@media (max-width: 1200px) {
				grid-template-columns: repeat(3, 1fr);
				grid-gap: 0.5rem;
			}
			@media (max-width: 500px) {
				grid-template-columns: repeat(2, 1fr);
				grid-gap: 0.5rem;
			}
		}

		.form_field {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 10px;

			label {
				display: none;
			}

			.input_col {
				flex-basis: 30%;
			}
			.input_form {
				width: 100%;
				max-width: 400px;
				padding: 0.7rem;
				border: none;
				border-radius: 5px;
				background-color: #ffffff;
				box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
				font-size: 16px;

				&::placeholder {
					color: #a9a9a9;
				}
			}
		}

		.button_form {
			margin: auto;
			padding: 1rem 2rem;
			border: none;
			border-radius: 2rem;
			background-color: v.$dark-blue;
			color: v.$light-gray;
			font-size: 16px;
			cursor: pointer;
			transition: background-color 0.3s ease;

			&:hover {
				background-color: v.$yellow;
				color: v.$dark-blue;
			}

			@media (max-width: 600px) {
				max-width: 50vw;
				margin: auto;
			}
		}
	}
}
</style>
