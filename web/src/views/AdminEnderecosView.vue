<template>
    <section>
        <div>
            <form enctype="multipart/form-data" @submit="sendData()">
                <div style="margin-right:.5rem" >
                    <label for="cidade"></label>
                    <input type="text"
                    name="cidade"
                    id="cidade"
                    placeholder="Cidade"
                    v-model="form.cidade">
                </div>
                <div style="margin-right:.5rem" >
                    <label for="estado"></label>
                    <input type="text"
                    name="estado"
                    id="estado"
                    placeholder="Estado"
                    v-model="form.estado">
                </div>
                <div style="margin-right:.5rem" >
                    <label for="numero"></label>
                    <input type="number"
                    name="numero"
                    id="numero"
                    placeholder="Numero"
                    v-model="form.numero">
                </div>
                <div style="margin-right:.5rem" >
                    <label for="rua"></label>
                    <input type="text"
                    name="rua"
                    placeholder="Rua"
                    v-model="form.rua">
                </div>
                <div style="margin-right:.5rem" >
                    <label for="bairro"></label>
                    <input type="text"
                    name="bairro"
                    id="bairro"
                    placeholder="Bairro"
                    v-model="form.bairro">
                </div>
                <div style="margin-right:.5rem">
                    <label for="complemento"></label>
                    <input type="text"
                    name="complemento"
                    id="complemento"
                    placeholder="Complemento"
                    v-model="form.complemento">
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID endereço</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        <th>Numero</th>
                        <th>Rua</th>
                        <th>bairro</th>
                        <th>Complemento</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="endereco in enderecosArr" :key="endereco.id_endereco">
                        <td style="text-align:center"> {{ endereco.id_endereco }} </td>
                        <td style="text-align:center"> {{ endereco.cidade }} </td>
                        <td style="text-align:center"> {{ endereco.estado }} </td>
                        <td style="text-align:center"> {{ endereco.numero }} </td>
                        <td style="text-align:center"> {{ endereco.rua }} </td>
                        <td style="text-align:center"> {{ endereco.bairro }} </td>
                        <td style="text-align:center"> {{ endereco.complemento }} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            enderecosArr: "",
            form: {
                id_endereco: "",
                cidade: "",
                estado: "",
                numero: "",
                rua: "",
                bairro: "",
                complemento: ""
            }
        }
    },

    methods: {
        async getData() {
            await axios.get("http://localhost:3000/api/enderecos")
                .then((res) => {
                    this.enderecosArr = res.data
                })
                .catch(erro => console.log(erro))
        },

        async sendData() {
            const data = {
                cidade : this.form.cidade,
                estado : this.form.estado,
                numero : this.form.numero,
                rua : this.form.rua,
                bairro : this.form.bairro,
                complemento : this.form.complemento
            }

            await axios.post("http://localhost:3000/api/enderecos",data)
                .then(res => res.data)
                .catch(error => console.log(error))
        }
    },

    mounted() {
        this.getData()
    }
}
</script>