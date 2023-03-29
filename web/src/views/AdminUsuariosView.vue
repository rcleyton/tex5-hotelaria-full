<template>
    <section>
        <div>
            <form style="display:flex" enctype="multipart/form-data" @submit="sendData()" >
			<div style="margin-right:.5rem">
				<label for="nome"></label>
				<input type="text"
				name="nome"
				id="nome"
				placeholder="Nome"
				v-model="form.nome">
			</div>
			<div style="margin-right:.5rem">
				<label for="telefone"></label>
				<input type="number"
				name="telefone"
				id="telefone"
				placeholder="telefone"
				v-model="form.telefone">
			</div>
			<div style="margin-right:.5rem">
				<label for="cpf"></label>
				<input type="number"
				name="cpf"
				id="cpf"
				placeholder="cpf"
				v-model="form.cpf">
			</div>
			<div style="margin-right:.5rem">
				<label for="email"></label>
				<input type="email"
				name="email"
				id="email"
				placeholder="email"
				v-model="form.email">
			</div>
            <div style="margin-right:.5rem">
				<label for="senha"></label>
				<input type="number"
				name="senha"
				id="senha"
				placeholder="senha"
				v-model="form.senha">
			</div>
            <div style="margin-right:.5rem">
				<label for="endereco_id"></label>
				<input type="number"
				name="endereco_id"
				id="endereco_id"
				placeholder="Id de endereço"
				v-model="form.endereco_id">
			</div>	
			<button type="submit">Cadastrar</button>	
		</form>
        </div>
        <!-- -->
        <div>
            <table>
                <thead>
                    <tr>
                        <th >ID</th>
                        <th >Nome</th>
                        <th >Telefone</th>
                        <th >Cpf</th>
                        <th >Email</th>
                        <th >Senha</th>
                        <th >ID de endereço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" usuario in usuariosArr" :key="usuario.id_usuario">
                        <td style="text-align:center"> {{usuario.id_usuario}} </td>
                        <td style="text-align:center"> {{usuario.nome}} </td>
                        <td style="text-align:center"> {{usuario.telefone}} </td>
                        <td style="text-align:center"> {{usuario.cpf}} </td>
                        <td style="text-align:center"> {{usuario.email}} </td>
                        <td style="text-align:center"> {{usuario.senha}} </td>
                        <td style="text-align:center"> {{usuario.endereco_id}} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>
<script>
import axios from 'axios'
export default {
    name:'AdminUsuariosView.vue',
    data() {
        return {
            usuariosArr: '',
            form: {
                id_usuario: '',
                nome: '',
                telefone: '',
                cpf: '',
                email: '',
                senha: '',
                endereco_id: '',
            }
        }
    },

    methods: {
        async getData() {
            await axios.get('http://localhost:3000/api/usuarios')
                .then(res => this.usuariosArr = res.data)
                .catch(error => console.log(error)) 
        },

        async sendData() {
            const data = {
                id_usuario: this.form.id_usuario,
                nome: this.form.nome,
                telefone: this.form.telefone,
                cpf: this.form.cpf,
                email: this.form.email,
                senha: this.form.senha,
                endereco_id: this.form.endereco_id
            }

                await axios.post('http://localhost:3000/api/usuarios', data)
                    .then(res => res.data)
                    .catch(error => console.log(error))
        }
    },

    mounted() {
        this.getData()
    }
}
</script>