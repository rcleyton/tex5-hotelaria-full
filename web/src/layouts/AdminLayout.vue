<template>
	<header>
		<nav>
			<ul>
				<li>
					<router-link :to="{ name: 'AdminView' }">Início</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'AdminAcomodacoes' }"
						>Acomodações</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'AdminServicosAdicionais' }"
						>Serviços Adicionais</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'AdminUsuarios' }">Usuários</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'AdminReservas' }">Reservas</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'AdminEnderecos' }">Endereços</router-link>
				</li>
				<li>
					<router-link :to="{ name: 'AdminConsumo' }">Consumo</router-link>
				</li>
			</ul>
		</nav>
	</header>
	<router-view></router-view>
</template>
<script>
export default {
	name: 'AdminLayout',
	data() {
		return {};
	},
};
</script>
<style lang="scss" scoped>
header {
	nav {
		ul {
			li {
				display: inline-block;

				& + li {
					margin-inline-start: 1rem;
				}

				a {
					text-decoration: none;
				}
			}
		}
	}
}
</style>
