<template>
	<li class="dropdown" v-if="true">
		Faça seu login ou cadastre-se
		<ul>
			<li>
				<router-link to="login">Entrar</router-link>
			</li>
			<li>
				<router-link to="cadastro">Cadastrar</router-link>
			</li>
		</ul>
	</li>
	<li class="dropdown" v-else>
		Nome
		<ul>
			<li>Perfil</li>
			<li>Sair</li>
		</ul>
	</li>
</template>
<script>
export default {
	name: 'LoginComponent',
};
</script>
<style lang="scss">
.dropdown {
	position: relative;

	&:after {
		content: '';
		display: inline-block;
		background-image: url('../assets/icons/caret-down.svg');
		background-size: cover;
		width: 16px;
		height: 16px;
	}

	&:hover {
		&:after {
			transform: rotate(180deg);
		}

		ul {
			display: block;
		}
	}

	ul {
		border-radius: 0.5rem;
		display: none;
		padding: 1rem;
		position: relative;

		@media (min-width: 768px) {
			background-color: rgba(27, 38, 59, 0.8);
			position: absolute;
			left: 0;
			top: auto;
		}

		li {
			padding-inline: 0.5rem;
			padding-block: 1rem;
			width: 100%;

			&:hover {
				background-color: #4c9e9e;
			}
		}
	}
}
</style>
