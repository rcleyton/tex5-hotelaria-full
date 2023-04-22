<template>
	<div>
		<div></div>
		<h1>Perfil</h1>
		<form>
			<fieldset>
				<legend>Dados pessoais</legend>
				<div>
					<label for="nome">Nome</label>
					<input type="text" :value="dadosUsuario.nome" id="nome" />
				</div>
				<div>
					<label for="email">Email</label>
					<input type="text" :value="dadosUsuario.email" id="email" />
				</div>
				<div>
					<label for="telefone">Telefone</label>
					<input type="text" :value="dadosUsuario.telefone" id="telefone" />
				</div>
				<div>
					<label for="cpf">CPF</label>
					<input type="text" :value="dadosUsuario.cpf" id="cpf" />
				</div>
			</fieldset>
			<fieldset>
				<legend>Endereço</legend>
				<div>
					<label for="rua">Rua</label>
					<input type="text" :value="dadosUsuario.rua" id="rua" />
				</div>
				<div>
					<label for="numero">Número</label>
					<input type="text" :value="dadosUsuario.numero" id="rua" />
				</div>
				<div>
					<label for="complemento">Complemento</label>
					<input type="text" :value="dadosUsuario.complemento" id="rua" />
				</div>
				<div>
					<label for="bairro">Bairro</label>
					<input type="text" :value="dadosUsuario.bairro" id="rua" />
				</div>
				<div>
					<select
						name="estado"
						id="estado"
						class="select"
						:value="dadosUsuario.estado"
					>
						<option hidden disabled value="">Selecione um estado</option>
						<option
							v-for="estado in estados"
							:key="estado.uf"
							:value="estado.uf"
						>
							{{ estado.nome }}
						</option>
					</select>
				</div>
			</fieldset>
		</form>
		<h2>Minhas reservas</h2>
		<ul>
			<li v-for="reserva in reservasUsuario">
				{{ reserva }}
			</li>
		</ul>

		{{ dadosUsuario }}
	</div>
</template>
<script>
import { estados } from '@/components/constants/estados';
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
	name: 'PerfilView',
	data() {
		return {
			dadosUsuario: {},
			reservasUsuario: [],
			estados,
		};
	},
	computed: {
		...mapGetters(['usuario']),
	},
	created() {
		axios
			.get(
				'http://localhost:3000/api/usuarios/perfil/' + this.usuario.id_usuario
			)
			.then((res) => (console.log(res.data)));
	},
};
</script>
<style lang="scss" scoped></style>
