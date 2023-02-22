<template>
	<div>
		<aside class="resume">
			<div class="resume__reserve">
				<h2 class="resume__title">Resumo da reserva</h2>
				<ul class="resume__l">
					<li class="resume__listItem">
						Data de Entrada: {{ $store.state.dadosReserva.checkIn }}
					</li>
					<li class="resume__listItem">
						Data de Saída: {{ $store.state.dadosReserva.checkOut }}
					</li>
					<li class="resume__listItem">
						Número de Hóspedes:
						{{ $store.state.dadosReserva.quantidadeDePessoas }}
					</li>
					<li class="resume__listItem">
						Diárias: {{ $store.getters.diarias }}
						{{
							!$store.getters.diarias
								? ''
								: $store.getters.diarias > 1
								? 'dias'
								: 'dia'
						}}
					</li>
					<li class="resume__listItem">
						Quarto: {{ $store.getters.acomodacao?.nome }}
					</li>
					<li class="resume__listItem">
						Valor do quarto:
						{{ formatCurrency($store.getters.acomodacao?.preco) }}
					</li>
					<li class="resume__listItem">
						Valor da hospedagem:
						{{ formatCurrency($store.getters.totalHospedagem) }}
					</li>
				</ul>
				<AditionalServicesModal />
				<ul class="resume__total">
					<li class="resume__listItem">
						Total Adicionais:
						{{ formatCurrency($store.getters.totalAdicionais) }}
					</li>
					<li class="resume__listItem">
						Valor total:
						{{ formatCurrency($store.getters.total) }}
					</li>
				</ul>
			</div>
		</aside>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import AditionalServicesModal from './AditionalServicesModal.vue';

export default {
	name: 'ResumoReserva',
	components: { AditionalServicesModal },
	computed: {
		acomodacao() {
			return this.acomodacao;
		},
	},
	getters: {
		...mapGetters(['total', 'acomodacao', 'totalHospedagem']),
	},
	methods: {
		formatCurrency(value) {
			if (!value) return '';
			return Intl.NumberFormat(undefined, {
				currency: 'BRL',
				style: 'currency',
			}).format(value);
		},
	},
};
</script>
<style lang="scss" scoped>
.resume {
	align-self: start;
	position: sticky;
	background: #0c1926;
	color: #fff;
	top: 200px;
	width: 35vw;
	margin-bottom: 5.1rem;
	margin-left: 5rem;
	border-radius: 5px;
	box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
}

.resume__reserve {
	padding: 2rem;
}

.resume__title {
	text-align: center;
	margin-bottom: 2rem;
}

.resume__listItem {
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.5rem;
}

.resume__addServices {
	display: block;
	color: #fff;
	padding: 2rem 0;
	text-align: right;
}

.resume__continue {
	width: 100%;
	margin: 2rem 0 0 0;
	padding: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 900;
	color: #415a77;
	cursor: pointer;
}

.resume__total {
	margin: 2rem 0;
}
</style>
