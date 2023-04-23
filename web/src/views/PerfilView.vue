<template>
	<div>
		<div></div>
		<h1>Perfil</h1>
		<form>
			<fieldset>
				<legend>Dados pessoais</legend>
				<div>
					<label for="nome">Nome</label>
					<input type="text" :value="dadosUsuario.nome" id="nome" />
				</div>
				<div>
					<label for="email">Email</label>
					<input type="text" :value="dadosUsuario.email" id="email" />
				</div>
				<div>
					<label for="telefone">Telefone</label>
					<input type="text" :value="dadosUsuario.telefone" id="telefone" />
				</div>
				<div>
					<label for="cpf">CPF</label>
					<input type="text" :value="dadosUsuario.cpf" id="cpf" />
				</div>
			</fieldset>
			<fieldset>
				<legend>Endereço</legend>
				<div>
					<label for="rua">Rua</label>
					<input type="text" :value="dadosUsuario.rua" id="rua" />
				</div>
				<div>
					<label for="numero">Número</label>
					<input type="text" :value="dadosUsuario.numero" id="rua" />
				</div>
				<div>
					<label for="complemento">Complemento</label>
					<input type="text" :value="dadosUsuario.complemento" id="rua" />
				</div>
				<div>
					<label for="bairro">Bairro</label>
					<input type="text" :value="dadosUsuario.bairro" id="rua" />
				</div>
				<div>
					<select
						name="estado"
						id="estado"
						class="select"
						:value="dadosUsuario.estado"
					>
						<option hidden disabled value="">Selecione um estado</option>
						<option
							v-for="estado in estados"
							:key="estado.uf"
							:value="estado.uf"
						>
							{{ estado.nome }}
						</option>
					</select>
				</div>
			</fieldset>
		</form>
		<section class="reservas">
			<h2>Minhas reservas</h2>
			<ul>
				<li v-for="reserva in reservasUsuario" :key="reserva.id_reserva">
					<div class="perfil__reserva__card">
						<img
							:src="'http://localhost:3000/static/' + reserva.acom_imagem"
							width="200"
							height="100"
						/>
						<div class="conteudo">
							<h3>{{ reserva.acom_titulo }}</h3>
							<div class="datas">
								<p>
									Check-in: <span>{{ reserva.check_in }}</span>
								</p>
								<p>
									Check-out: <span>{{ reserva.check_out }}</span>
								</p>
							</div>
							<p>Total: {{ formataValor(reserva.total) }}</p>
							<button
								type="button"
								class="confirmacao"
								:disabled="reserva.confirmada"
								@click="confirmarReserva"
							>
								{{
									reserva.confirmada
										? 'Reserva Confirmada'
										: 'Confirmar Reserva'
								}}
							</button>
						</div>
					</div>
				</li>
			</ul>
		</section>
	</div>
</template>
<script>
import { estados } from '@/components/constants/estados';
import { formataValor } from '@/helpers/formataValor';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
	name: 'PerfilView',
	data() {
		return {
			dadosUsuario: {},
			reservasUsuario: [],
			estados,
			formataValor,
		};
	},
	computed: {
		...mapGetters(['usuario']),
	},
	methods: {
		confirmarReserva() {
			const confirmacao = window.confirm('Deseja confirmar reserva?');
			if (confirmacao) {
				console.log('works!');
			}
		},
	},
	created() {
		axios
			.get(
				'http://localhost:3000/api/usuarios/perfil/' + this.usuario.id_usuario
			)
			.then((res) => {
				this.dadosUsuario = res.data[0];
				this.reservasUsuario = res.data[1];
			});
	},
};
</script>
<style lang="scss" scoped>
.reservas {
	ul {
		li {
			margin-block-end: 1rem;
		}
	}
}
.perfil__reserva__card {
	display: flex;
	gap: 1rem;

	img {
		border-radius: 6px;
		max-width: 288px;
		width: 100%;
	}

	.conteudo {
		padding-block: 1rem;

		h3 {
			margin: 0;
			padding-block-end: 0.5rem;
			border-bottom: 1px solid black;
		}

		.datas {
			p {
				display: inline-block;

				span {
					font-weight: bold;
				}

				& + p {
					margin-inline-start: 1rem;
				}
			}
		}

		.confirmacao {
			padding-inline: 1rem;
			padding-block: 0.5rem;
			border: 0;
			border-radius: 6px;
			background-color: red;
			color: #fff;
			cursor: pointer;
			transition: all 100ms ease-in;

			&:hover {
				background-color: lightgreen;
				color: black;
			}

			&:disbaled {
				cursor: auto;
			}
		}
	}
}
</style>
