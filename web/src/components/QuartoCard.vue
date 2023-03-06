<template>
	<div class="roomOptions__room reserva">
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

		<div class="select">
			<input
				class="roomOptions__selectRoom"
				type="radio"
				:id="quarto.id"
				:value="quarto.id"
				:checked="dadosReserva.acomodacaoId == quarto.id"
				name="acomodacaoId"
				@change="handleInputChange($event)"
			/>
			<label class="roomOptions__selectRoom"
				>Reservar o quarto {{ quarto.nome }}</label
			>
		</div>
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
$yellow: #e3bb00ff;
.roomOptions__room {
	background-color: #fff;
	border: 0.1rem solid #415a77;
	margin: 2rem 3rem;
	/* margin-left: 2rem; */
	/* padding-left: 5rem; */
	/* padding-bottom: 2rem; */
	border-radius: 5px;
	box-shadow: 2px 2px 7px rgb(0 0 0 / 7%);
}

.reserva {
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.roomOptions__roomImagem {
	padding: 0 0 2rem 0;
	width: 80%;

	@media (max-width: 768px) {
		width: 100%;
	}
}

.roomOptions__roomTitle {
	font-size: 1.5rem;
	padding: 1rem 0 1rem 1rem;
	color: #0c1926;
	font-weight: 600;
}

.roomOptions__roomDescription {
	text-align: center;
	padding: 0 1rem 1.7rem 1rem;
	width: 80%;

	@media (max-width: 768px) {
		width: 100%;
	}
}

.roomOptions__roomPrice {
	display: flex;
	font-size: 1.2rem;
	width: 30%;
	background-color: $yellow;
	border-radius: 2rem;
	text-align: center;
	padding: 1rem;
	color: #fff;
	font-weight: bold;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		width: 50%;
		margin-bottom: 1rem;
	}
}

.roomOptions__selectRoom {
	padding: 0.5rem;
	font-weight: 700;
	margin: 1.2rem 0;
	font-size: 1.2rem;
	text-align: center;

	@media (max-width: 768px) {
		font-weight: 700;
		text-align: center;
		margin: 0.5rem 0;
	}
}

.roomOptions__paragraph {
	position: relative;
	color: #0c1926;
	font-size: 2rem;
	margin: auto;
	text-align: center;
}

.select {
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
}

input[type='radio'] {
	width: 1.5rem;
	height: 1.5rem;
	float: left;
	cursor: pointer;
	accent-color: #415a77;
}
</style>
