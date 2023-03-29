<template>
    <section>
        <div>
            <form enctype="multipart/form-data" @submit="sendData()" >
			<div style="margin-right:.5rem">
				<label for="check_in"></label>
				<input type="date"
				name="check_in"
				id="check_in"
				placeholder="Check in"
				v-model="form.check_in">
			</div>
			<div style="margin-right:.5rem">
				<label for="check_out"></label>
				<input type="date"
				name="check_out"
				id="check_out"
				placeholder="Check out"
				v-model="form.check_out">
			</div>
			<div style="margin-right:.5rem">
				<label for="quantidade_pessoas"></label>
				<input type="number"
				name="quantidade_pessoas"
				id="quantidade_pessoas"
				placeholder="Quantidade de pessoas"
				v-model="form.quantidade_pessoas">
			</div>
			<div style="margin-right:.5rem">
				<label for="total"></label>
				<input type="number"
				name="total"
				id="total"
				placeholder="total"
				v-model="form.total">
			</div>
            <div style="margin-right:.5rem">
				<label for="total_desconto"></label>
				<input type="number"
				name="total_desconto"
				id="total_desconto"
				placeholder="Total de desconto"
				v-model="form.total_desconto">
			</div>	
            <div style="margin-right:.5rem">
				<label for="confirmacao"></label>
				<input type="number"
				name="confirmacao"
				id="confirmacao"
				placeholder="Confirmação"
				v-model="form.confirmacao">
			</div>	
            <div style="margin-right:.5rem">
				<label for="data_confirmacao"></label>
				<input type="date"
				name="data_confirmacao"
				id="data_confirmacao"
				placeholder="data de confirmação"
				v-model="form.data_confirmacao">
			</div>	
            <div style="margin-right:.5rem">
				<label for="cupom_id"></label>
				<input type="number"
				name="cupom_id"
				id="cupom_id"
				placeholder="ID do cupom"
				v-model="form.cupom_id">
			</div>	
            <div style="margin-right:.5rem">
				<label for="acomodacao_id"></label>
				<input type="number"
				name="acomodacao_id"
				id="acomodacao_id"
				placeholder="ID da acomodação"
				v-model="form.acomodacao_id">
			</div>
            <div style="margin-right:.5rem">
				<label for="usuario_id"></label>
				<input type="number"
				name="usuario_id"
				id="usuario_id"
				placeholder="ID do usuario"
				v-model="form.usuario_id">
			</div>
            <div style="margin-right:.5rem">
				<label for="servicos_adicionais_id"></label>
				<input type="number"
				name="servicos_adicionais_id"
				id="servicos_adicionais_id"
				placeholder="ID de serviços adicionais"
				v-model="form.servicos_adicionais_id">
			</div>				
			<button type="submit">Cadastrar</button>	
		</form>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID da reserva</th>
                        <th>Check in</th>
                        <th>Check out</th>
                        <th>Quantdade de pessoas</th>
                        <th>Total</th>
                        <th>Total de desconto</th>
                        <th>Confirmação</th>
                        <th>Data de confirmação</th>
                        <th>Referência do cupom</th>
                        <th>Referência de acomodação</th>
                        <th>Referência de usuário</th>
                        <th>Referência de serviços adicionais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="reserva in reservasArr" :key="reserva.id_reserva">
                        <td style=" text-align:center" > {{ reserva.id_reserva }} </td>
                        <td style=" text-align:center" > {{ reserva.check_in }} </td>
                        <td style=" text-align:center" > {{ reserva.check_out }} </td>
                        <td style=" text-align:center" > {{ reserva.quantidade_pessoas }} </td>
                        <td style=" text-align:center" > {{ reserva.total }} </td>
                        <td style=" text-align:center" > {{ reserva.total_desconto }} </td>
                        <td style=" text-align:center" > {{ reserva.confirmacao }} </td>
                        <td style=" text-align:center" > {{ reserva.data_confirmacao }} </td>
                        <td style=" text-align:center" > {{ reserva.cupom_id }} </td>
                        <td style= "text-align:center" > {{ reserva.acomodacao_id }}</td>
                        <td style=" text-align:center" > {{ reserva.usuario_id }} </td>
                        <td style=" text-align:center" > {{ reserva.servicos_adicionais_id }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    name:'AdminReservasView',
    data() {
        return {
            reservasArr : "",
            form : {
                id_reserva: "",
                check_in: "",
                check_out: "",
                quantidade_pessoas: "",
                total: "",
                total_desconto: "",
                confirmacao: "",
                data_confirmacao: "",
                cupom_id: "",
                acomodacao_id: "",
                usuario_id: "",
                servicos_adicionais_id: ""
            }
        }
    },

    methods: {
        async getData() {
            await axios.get('http://localhost:3000/api/reservas')
                .then(res => this.reservasArr = res.data)
                .catch(error => console.log(error))
        },

        async sendData() {
            const data = {
                id_reserva: this.form.id_reserva,
                check_in: this.form.check_in,
                check_out: this.form.check_out,
                quantidade_pessoas: this.form.quantidade_pessoas,
                total: this.form.total,
                total_desconto: this.form.total_desconto,
                confirmacao: this.form.confirmacao,
                data_confirmacao: this.form.data_confirmacao,
                cupom_id: this.form.cupom_id,
                acomodacao_id: this.form.acomodacao_id,
                usuario_id: this.form.usuario_id,
                servicos_adicionais_id: this.form.servicos_adicionais_id
            }

            await axios.post('http://localhost:3000/api/reservas', data)
                .then(res => res.data)
                .catch(erro => console.log(erro))
        }
    },

    mounted () {
        this.getData()
    }
}
</script>


<style>
* {
    font-size: .8rem;
}
</style>