<template>
	<div class="main_content">
		<div class="fixed-form">
			<section class="form_main">
				<div class="form_default">
					<legend class="section_title">Cadastrar Reserva</legend>
					<form
						class="form_geral"
						enctype="multipart/form-data"
						@submit="sendData()"
					>
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
							<label for="total"></label>
							<input
								class="input_form"
								type="number"
								name="total"
								id="total"
								placeholder="total"
								v-model="form.total"
							/>
						</div>
						<div class="form_field">
							<label for="total_desconto"></label>
							<input
								class="input_form"
								type="number"
								name="total_desconto"
								id="total_desconto"
								placeholder="Total de desconto"
								v-model="form.total_desconto"
							/>
						</div>
						<div class="form_field">
							<label for="confirmacao"></label>
							<input
								class="input_form"
								type="number"
								name="confirmacao"
								id="confirmacao"
								placeholder="Confirmação"
								v-model="form.confirmacao"
							/>
						</div>
						<div class="form_field">
							<label for="data_confirmacao"></label>
							<input
								class="input_form"
								type="date"
								name="data_confirmacao"
								id="data_confirmacao"
								placeholder="data de confirmação"
								v-model="form.data_confirmacao"
							/>
						</div>
						<div class="form_field">
							<label for="cupom_id"></label>
							<input
								class="input_form"
								type="number"
								name="cupom_id"
								id="cupom_id"
								placeholder="ID do cupom"
								v-model="form.cupom_id"
							/>
						</div>
						<div class="form_field">
							<label for="acomodacao_id"></label>
							<input
								class="input_form"
								type="number"
								name="acomodacao_id"
								id="acomodacao_id"
								placeholder="ID da acomodação"
								v-model="form.acomodacao_id"
							/>
						</div>
						<div class="form_field">
							<label for="usuario_id"></label>
							<input
								class="input_form"
								type="number"
								name="usuario_id"
								id="usuario_id"
								placeholder="ID do usuario"
								v-model="form.usuario_id"
							/>
						</div>
						<div class="form_field">
							<label class="input_col" for="servicos_adicionais_id"></label>
							<input
								class="input_form"
								type="number"
								name="servicos_adicionais_id"
								id="servicos_adicionais_id"
								placeholder="ID de serviços adicionais"
								v-model="form.servicos_adicionais_id"
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
export default {
	name: 'AdminReservasView',
	data() {
		return {
			reservasArr: '',
			form: {
				id_reserva: '',
				check_in: '',
				check_out: '',
				quantidade_pessoas: '',
				total: '',
				total_desconto: '',
				confirmacao: '',
				data_confirmacao: '',
				cupom_id: '',
				acomodacao_id: '',
				usuario_id: '',
				servicos_adicionais_id: '',
			},
			formataData,
		};
	},
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
				id_reserva: this.form.id_reserva,
				check_in: this.form.check_in,
				check_out: this.form.check_out,
				quantidade_pessoas: this.form.quantidade_pessoas,
				total: this.form.total,
				total_desconto: this.form.total_desconto,
				confirmacao: this.form.confirmacao,
				data_confirmacao: this.form.data_confirmacao,
				cupom_id: this.form.cupom_id,
				acomodacao_id: this.form.acomodacao_id,
				usuario_id: this.form.usuario_id,
				servicos_adicionais_id: this.form.servicos_adicionais_id,
			};

			axios
				.post('http://localhost:3000/api/reservas', data)
				.then((res) => res.data)
				.catch((erro) => console.log(erro));
		},
	},

	mounted() {
		this.getData();
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
