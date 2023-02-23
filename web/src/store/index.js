import { createStore } from 'vuex';
import { calculaTotalDeDias } from '../helpers/calculaTotalDeDias';

export default createStore({
	state: {
		quartosHotel: [
			{
				id: 1,
				img: require('@/assets/images/quarto_1.jpg'),
				nome: 'Suíte Executiva',
				descricao:
					'O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.',
				img: require('@/assets/images/quarto_1.jpg'),
				nome: 'Suíte Executiva',
				descricao:
					'O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.',
				preco: 200,
			},
			{
				id: 2,
				img: require('@/assets/images/quarto_2.jpg'),
				nome: 'Suíte Master',
				descricao:
					'O apartamento possui uma decoração moderna e luxuosa, sendo composta por sala com TV e som, mesa de refeição com quatro cadeiras, sofá e mesa de trabalho. O quarto há 01 cama King Size. Vista mar.',
				img: require('@/assets/images/quarto_2.jpg'),
				nome: 'Suíte Master',
				descricao:
					'O apartamento possui uma decoração moderna e luxuosa, sendo composta por sala com TV e som, mesa de refeição com quatro cadeiras, sofá e mesa de trabalho. O quarto há 01 cama King Size. Vista mar.',
				preco: 250,
			},
			{
				id: 3,
				img: require('@/assets/images/quarto_3.jpg'),
				nome: 'Suíte Presidencial',
				descricao:
					'Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar.',
				img: require('@/assets/images/quarto_3.jpg'),
				nome: 'Suíte Presidencial',
				descricao:
					'Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar.',
				preco: 350,
			},
			{
				id: 4,
				img: require('@/assets/images/quarto_4.jpg'),
				nome: 'Suíte Advanced',
				descricao:
					'Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar.',
				preco: 150,
			},
			{
				id: 5,
				img: require('@/assets/images/quarto_5.png'),
				nome: 'Suíte Standard',
				descricao:
					'Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar.',
				preco: 350,
			},
			{
				id: 6,
				img: require('@/assets/images/quarto_6.jpg'),
				nome: 'Suíte Junior',
				descricao:
					'Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar.',
				preco: 450,
			},
		],
		servicosAdicionais: [
			{
				id: 1,
				name: 'Café da manhã',
				price: 35,
			},
			{
				id: 2,
				name: 'Cofre',
				price: 30,
			},
			{
				id: 3,
				name: 'Massagem',
				price: 120,
			},
			{
				id: 4,
				name: 'SPA',
				price: 280,
			},
			{
				id: 5,
				name: 'Translado',
				price: 110,
			},
		],
		dadosReserva: {
			checkIn: '',
			checkOut: '',
			quantidadeDePessoas: '',
			acomodacaoId: '',
			servicosAdicionais: {},
		},
		consumoReserva: {
			frigobar: [
				{
					id: 1,
					item: 'Água',
					valor: 2,
					quantidade: 1,
				},
				{
					id: 2,
					item: 'Refrigerante',
					valor: 4,
					quantidade: 3,
				},
				{
					id: 3,
					item: 'Amendoim',
					valor: 4,
					quantidade: 3,
				},
			],
			bar: [
				{
					id: 1,
					item: 'Água',
					valor: 2,
					quantidade: 1,
				},
				{
					id: 2,
					item: 'Refrigerante',
					valor: 4,
					quantidade: 4,
				},
				{
					id: 4,
					item: 'Cerveja',
					valor: 4,
					quantidade: 3,
				},
			],
		},
	},
	getters: {
		dadosReserva: (state) => state.dadosReserva,
		consumoReserva: (state) => state.consumoReserva,
		quartosHotel: (state) => state.quartosHotel,
		listaConsumoReserva: (state) => {
			const consumoObj = state.consumoReserva;
			const lista = [];
			const cache = {};

			for (const [key, value] of Object.entries(consumoObj)) {
				value.forEach((element) => {
					if (!cache[element.id]) {
						lista.push(element);
						cache[element.id] = true;
					} else {
						lista.find((item) => item.id == element.id).quantidade +=
							element.quantidade;
					}
				});
			}

			return lista;
		},
		acomodacao: (state) => {
			return (
				state.quartosHotel.find(
					(q) => q.id == state.dadosReserva.acomodacaoId
				) ?? ''
			);
		},
		diarias: (state) => {
			if (
				state.dadosReserva.checkIn !== '' &&
				state.dadosReserva.checkOut !== ''
			) {
				return calculaTotalDeDias(
					state.dadosReserva.checkIn,
					state.dadosReserva.checkOut
				);
			} else {
				return '';
			}
		},
		totalAdicionais: (state) => {
			let total = 0;
			for (const [key, value] of Object.entries(
				state.dadosReserva.servicosAdicionais
			)) {
				if (value) {
					total += state.servicosAdicionais.find((s) => s.id == key).price;
				}
			}
			return total;
		},
		totalHospedagem: (state) => {
			const diarias = calculaTotalDeDias(
				state.dadosReserva.checkIn,
				state.dadosReserva.checkOut
			);
			const acomodacao = state.quartosHotel.find(
				(q) => q.id == state.dadosReserva.acomodacaoId
			);
			if (diarias > 0 && acomodacao !== undefined) {
				return acomodacao.preco * diarias;
			} else {
				return '';
			}
		},
		total: (state) => {
			let totalAdicionais = 0;
			let totalHospedagem = 0;

			for (const [key, value] of Object.entries(
				state.dadosReserva.servicosAdicionais
			)) {
				if (value) {
					totalAdicionais += state.servicosAdicionais.find(
						(s) => s.id == key
					).price;
				}
			}

			const diarias = calculaTotalDeDias(
				state.dadosReserva.checkIn,
				state.dadosReserva.checkOut
			);
			const acomodacao = state.quartosHotel.find(
				(q) => q.id == state.dadosReserva.acomodacaoId
			);
			if (diarias > 0 && acomodacao !== undefined) {
				totalHospedagem = acomodacao.preco * diarias;
			}

			return totalAdicionais + totalHospedagem;
		},
	},
	mutations: {
		onInputChange(state, event) {
			if (event.target.name === 'additionalServices') {
				if (state.dadosReserva.servicosAdicionais[event.target.value]) {
					state.dadosReserva.servicosAdicionais = {
						...state.dadosReserva.servicosAdicionais,
						[event.target.value]: false,
					};
				} else {
					state.dadosReserva.servicosAdicionais = {
						...state.dadosReserva.servicosAdicionais,
						[event.target.value]: true,
					};
				}
			}
			state.dadosReserva[event.target.name] = event.target.value;
			localStorage.setItem('reserva', JSON.stringify(state.dadosReserva));
			return;
		},
	},
	actions: {
		handleInputChange({ commit }, event) {
			commit('onInputChange', event);
		},
	},
	modules: {},
	methods: {},
});
