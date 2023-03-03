<template>
	<container class="container">
		<h2 class="acomodacao_title">Nossas Acomodações</h2>
		<main class="acomodacao_container">
			<QuartoCard
				v-for="quarto in quartosHotel"
				:quarto="quarto"
				:key="quarto.id"
			/>
		</main>
	</container>
</template>

<script>
import QuartoCard from '@/components/QuartoCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AcomodacoesView',
	props: ['quarto'],
	components: {
		QuartoCard,
	},
	computed: {
		...mapGetters(['quartosHotel', 'dadosReserva']),
	},
	methods: {
		...mapActions(['handleInputChange']),
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
.container {
	color: #25334a;
	background-color: #ffffff;
	background-attachment: fixed;
	background-size: cover;
	text-align: center;
	display: flex;
	flex-direction: column;
}

.acomodacao_title {
	color: v.$main-blue;
	font-size: 2.4rem;
	font-weight: 700;
	margin: 150px 0 35px 0;
	text-align: center;
	text-transform: uppercase;
}

.acomodacao_container {
	width: 80%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	align-items: stretch;
	gap: 1rem;
}

.roomOptions__room {
	width: 40%;
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0;
}
</style>
