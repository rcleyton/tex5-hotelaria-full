export default {
	path: '/admin',
	component: () => import('../layouts/AdminLayout.vue'),
	children: [
		{
			path: '',
			name: 'AdminView',
			component: () => import('../views/AdminView.vue'),
		},
		{
			path: 'acomodacoes',
			name: 'AdminAcomodacoes',
			component: () => import('../views/AdminAcomodacoesView.vue'),
		},
		{
			path: 'cadastroAcomodacao',
			name: 'CadastroAcomodacao',
			component: () => import('../views/CadastroAcomodacaoView.vue'),
		},
		{
			path: 'editarAcomodacao',
			name: 'EditarAcomodacao',
			component: () => import('../views/EditarAcomodacaoView.vue'),
		},
		{
			path: '/admin-servicos-adicionais',
			name: 'AdminServicosAdicionais',
			component: () => import('../views/AdminServicosAdicionaisView.vue'),
		},
		{
			path: '/admin-usuarios',
			name: 'AdminUsuarios',
			component: () => import('../views/AdminUsuariosView.vue'),
		},
		{
			path: '/admin-reservas',
			name: 'AdminReservas',
			component: () => import('../views/AdminReservasView.vue'),
		},
		{
			path: '/admin-enderecos',
			name: 'AdminEnderecos',
			component: () => import('../views/AdminEnderecosView.vue'),
		},
		{
			path: '/admin-consumo',
			name: 'AdminConsumo',
			component: () => import('../views/AdminConsumoView.vue'),
		},
	],
};
