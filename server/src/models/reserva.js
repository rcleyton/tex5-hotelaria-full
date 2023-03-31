const AcomodacaoService = require('../services/acomodacoesService');

class Reserva {
	constructor(data) {
		this.check_in = data.check_in;
		this.check_out = data.check_out;
		this.quantidade_pessoas = data.quantidade_pessoas;
		this.id_usuario = data.id_usuario;
		this.id_acomodacao = data.id_acomodacao;
	}

	async getAcomodacao() {
		const [acomodacao] = await AcomodacaoService.getById(this.id_acomodacao);
		return acomodacao;
	}

	async calculaTotalReserva() {
		const acomodacao = await this.getAcomodacao();

		return (
			acomodacao.preco * this.calculaTotalDeDias(this.check_in, this.check_out)
		);
	}

	async salvarReserva() {
		const reserva = {
			check_in: this.check_in,
			check_out: this.check_out,
			quantidade_pessoas: this.quantidade_pessoas,
			total: await this.calculaTotalReserva(),
			total_desconto: this.total_desconto,
			confirmacao: 0,
			data_confirmacao: this.data_confirmacao,
			id_cupom: this.id_cupom,
			id_acomodacao: this.id_acomodacao,
			id_usuario: this.id_usuario,
		};

		console.log(reserva);
	}

	calculaTotalDeDias(checkIn, checkOut) {
		const diferencaEmMs =
			new Date(checkOut).valueOf() - new Date(checkIn).valueOf();
		const diferencaEmDias = diferencaEmMs / (1000 * 60 * 60 * 24);
		return diferencaEmDias;
	}
}

module.exports = Reserva;
