<template>
	<div class="roomOptions__room">
		<p class="roomOptions__roomTitle">
			{{ quarto.nome }}
		</p>
		<img
			:src="quarto.img"
			title="quarto Hotel"
			class="roomOptions__roomImagem"
		/>
		<p class="roomOptions__roomDescription">
			{{ quarto.descricao }}
		</p>
		<p class="roomOptions__roomPrice">R$ {{ quarto.preco }}</p>
		<input
			class="roomOptions__selectRoom reserva"
			type="radio"
			:id="quarto.id"
			:value="quarto.id"
			:checked="dadosReserva.acomodacaoId == quarto.id"
			name="acomodacaoId"
			@change="handleInputChange($event)"
		/>
		<label class="roomOptions__selectRoom"
			>Selecione o quarto {{ quarto.nome }}</label
		>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'RoomCard',
	props: ['quarto'],
	computed: {
		...mapGetters(['dadosReserva']),
	},
	methods: {
		...mapActions(['handleInputChange']),
	},
};
</script>

<style lang="scss" scoped>
.roomOptions__room {
	background-color: #fff;
	border: 1px solid #415a77;
	margin-bottom: 2rem;
	margin-left: 2rem;
	padding-left: 5rem;
	padding-bottom: 2rem;
	border-radius: 5px;
	box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
}

.roomOptions__roomImagem {
	padding: 0 0 2rem 0;
	width: 80%;
}

.roomOptions__roomTitle {
	font-size: 1.5rem;
	padding: 0 0 1rem 1rem;
	color: #0c1926;
	font-weight: 600;
}

.roomOptions__roomDescription {
	text-align: justify;
	padding: 0 1rem 1.7rem 1rem;
	width: 80%;
}

.roomOptions__roomPrice {
	display: block;
	width: 10vw;
	background-color: #00ff00;
	text-align: center;
	padding: 1rem;
	margin: 0 0 0 1rem;
	color: #fff;
	font-weight: bold;
}

.roomOptions__selectRoom {
	padding: 1rem;
	margin-top: 1.5rem;
}

.roomOptions__paragraph {
	position: relative;
	color: #0c1926;
	font-size: 2rem;
	margin: 45px 0 5px 0;
	text-align: left;
}
</style>
