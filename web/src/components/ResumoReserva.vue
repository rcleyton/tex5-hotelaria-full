<template>
	<div>
		<aside class="resume">
			<div class="resume__reserve">
				<h2 class="resume__title">Resumo da reserva</h2>
				<ul class="resume__l">
					<li class="resume__listItem">
						Data de Entrada: {{ dadosReserva.checkIn }}
					</li>
					<li class="resume__listItem">
						Data de Saída: {{ dadosReserva.checkOut }}
					</li>
					<li class="resume__listItem">
						Número de Hóspedes:
						{{ dadosReserva.quantidadeDePessoas }}
					</li>
					<li class="resume__listItem">
						Diárias: {{ diarias }}
						{{ !diarias ? '' : diarias > 1 ? 'dias' : 'dia' }}
					</li>
					<li class="resume__listItem">Quarto: {{ acomodacao?.nome }}</li>
					<li class="resume__listItem">
						Valor do quarto:
						{{ formatCurrency(acomodacao?.preco) }}
					</li>
					<li class="resume__listItem">
						Valor da hospedagem:
						{{ formatCurrency(totalHospedagem) }}
					</li>
				</ul>
				<AditionalServicesModal />

				<DiscountCode />

				<ul class="resume__total">
					<li class="resume__listItem">
						Total Adicionais:
						{{ formatCurrency(totalAdicionais) }}
					</li>
					<li class="resume__listItem">
						Valor total:
						{{ formatCurrency(total) }}
					</li>
				</ul>
				<ModalReservaContinue />
			</div>
		</aside>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import AditionalServicesModal from './AditionalServicesModal.vue';
import ModalReservaContinue from './ModalReservaContinue.vue';
import DiscountCode from './DiscountCode.vue';

export default {
	name: 'ResumoReserva',
	components: { AditionalServicesModal, ModalReservaContinue, DiscountCode },
	computed: {
		...mapGetters([
			'acomodacao',
			'dadosReserva',
			'diarias',
			'totalAdicionais',
			'totalHospedagem',
			'total',
		]),
	},
	getters: {},
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
