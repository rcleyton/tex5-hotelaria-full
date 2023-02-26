<template>
	<header>
		<div class="header__container">
			<div class="logo"></div>
			<nav class="navbar">
				<button
					type="button"
					@click="mostrarNavegacao"
					:data-open="navegacaoAmostra"
					aria-controls="main-navigation"
				>
					<span class="visually-hidden">Acessar menu navegação</span>
				</button>
				<ul
					class="main-navigation"
					id="main-navigation"
					:data-open="navegacaoAmostra"
				>
					<li v-for="route in routes">
						<router-link :to="route.path" :key="route.id">{{
							route.label
						}}</router-link>
					</li>
					<li class="dropdown">
						Faça seu login ou cadastre-se
						<ul>
							<li>
								<router-link to="login">Entrar</router-link>
							</li>
							<li>
								<router-link to="#">Cadastrar</router-link>
							</li>
						</ul>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script>
export default {
	name: 'HeaderComponent',
	data() {
		return {
			routes: [
				{ id: 1, path: '/', label: 'Início ' },
				{ id: 2, path: 'acomodacoes', label: 'Acomodações ' },
				{ id: 3, path: 'reservas', label: 'Reservas ' },
				{ id: 4, path: 'sobre', label: 'Sobre ' },
				{ id: 5, path: 'contato', label: 'Contato' },
			],
			navegacaoAmostra: false,
		};
	},
	methods: {
		mostrarNavegacao() {
			this.navegacaoAmostra = !this.navegacaoAmostra;
		},
	},
};
</script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;

.visually-hidden {
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border-width: 0;
}

header {
	background-color: #415a77;
	position: fixed;
	width: 100%;

	.header__container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #fff;
		width: 90%;
		max-width: 1440px;
		margin-inline: auto;
		padding-block: 16px;

		.logo {
			background-image: url('../assets/icons/logo_escrito.svg');
			background-repeat: no-repeat;
			background-size: contain;
			background-position: center;
			width: calc(128px + 3vw);
			height: 32px;

			@media (min-width: 768px) {
				background-image: url('../assets/icons/texhotel_logo2.svg');
				height: 96px;
			}
		}
	}
}

nav {
	button {
		background-color: transparent;
		background-image: url('../assets/icons/list.svg');
		background-size: cover;
		border: 0;
		height: 32px;
		width: 32px;

		@media (min-width: 768px) {
			display: none;
		}
	}

	.main-navigation {
		background-color: #415a77;
		display: none;
		left: 50%;
		position: absolute;
		padding-inline: calc(16px + 2vw);
		padding-block: 16px;
		text-align: center;
		transform: translateX(-50%);
		width: 100%;

		&[data-open='true'] {
			display: block;
		}

		@media (min-width: 768px) {
			align-items: center;
			display: flex;
			gap: 1rem;
			padding-inline: 0;
			position: relative;
		}

		li {
			font-size: 18px;
			a {
				color: #fff;
				text-decoration: none;

				@media (min-width: 768px) {
					font-size: 18px;
				}

				&:visited {
					color: inherit;
				}
			}

			&:hover {
				display: inline-block;
				background-color: #516b8a;
				transition: 0.3s ease;
			}

			& + li {
				margin-block-start: 1rem;

				@media (min-width: 768px) {
					margin-block-start: 0;
				}
			}
		}
	}
}

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
