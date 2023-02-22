<template>
	<div>
		<button class="resume__addService" @click="showModal = true">
			Adicionar mais serviços
		</button>
		<div v-if="showModal" @click="showModal = false">
			<div class="modal-content" @click.stop>
				<ul>
					<li v-for="item in servicosAdicionais" :key="item">
						<input
							type="checkbox"
							v-model="item.selected"
							:id="item.id"
							:value="item.id"
							:checked="dadosReserva.servicosAdicionais[item.id]"
							name="additionalServices"
							@change="handleInputChange($event)"
						/>
						{{ item.name }} - R$ {{ item.price }}
					</li>
				</ul>
				<button @click="showModal = false">Fechar</button>
			</div>
		</div>
	</div>
</template>

<script>
import store from '@/store';
import { mapActions, mapGetters } from 'vuex';

export default {
	name: 'AditionalServicesModal',
	data() {
		return {
			showModal: false,
		};
	},
	computed: {
		...mapGetters(['dadosReserva']),
		servicosAdicionais() {
			return store.state.servicosAdicionais;
		},
		selectedItems() {
			return this.servicosAdicionais.filter((item) => item.selected);
		},
		totalAditionalServices() {
			return this.selectedItems.reduce((acc, item) => acc + item.price, 0);
		},
	},
	methods: {
		...mapActions(['handleInputChange']),
	},
};
</script>

<style>
.modal-content {
	background-color: white;
	color: blue;
	padding: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 4px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

.resume__addService {
	/* width: 100%; */
	margin: 2rem 0 0 0;
	padding: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: 700;
	color: #415a77;
	cursor: pointer;
}

.resume__titleAddServices {
	text-align: center;
	margin: 2rem 0;
}

.resume__listItem {
	font-size: 0.9rem;
	font-weight: 600;
	line-height: 1.5rem;
}
</style>
