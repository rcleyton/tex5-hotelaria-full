<template>
	<div class="container">
		<div class="">
			<table>
				<thead>
					<tr>
						<th>Item</th>
						<th>Quantidade</th>
						<th>Valor Total</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="i of listaConsumoReserva">
						<td>{{ i.item }}</td>
						<td>{{ i.quantidade }}</td>
						<td>{{ formataValor(i.quantidade * i.valor) }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
import { mapGetters } from 'vuex';
import { formataValor } from '../helpers/formataValor';

export default {
	name: 'AdminView',
	computed: {
		...mapGetters(['listaConsumoReserva']),
	},
	methods: {
		formataValor,
	},
};
</script>
<style lang="scss" scoped>
.container {
	margin-top: 10rem;
}
</style>
