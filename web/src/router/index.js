import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'inicio',
		component: () => import('../views/InicioView.vue'),
	},
	{
		path: '/acomodacoes',
		name: 'acomodacoes',
		component: () => import('../views/AcomodacoesView.vue'),
	},
	{
		path: '/reservas',
		name: 'reservas',
		component: () => import('../views/ReservasView.vue'),
	},
	{
		path: '/sobre',
		name: 'sobre',
		component: () => import('../views/SobreView.vue'),
	},
	{
		path: '/contato',
		name: 'contato',
		component: () => import('../views/ContatoView.vue'),
	},
	{
		path: '/admin',
		name: 'admin',
		component: () => import('../views/AdminView.vue'),
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: () => import('../views/Dashboard.vue'),
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue'),
	},
	{
		path: '/cadastro',
		name: 'cadastro',
		component: () => import('../views/CadastroView.vue'),
	},
	{
		path: '/cadastroAcomodacao',
		name: 'cadastroAcomodacao',
		component: () => import('../views/CadastroAcomodacaoView.vue'),
	},
	{
		path: '/admin-servicos-adicionais',
		name: 'admin-servicos-adicionais',
		component: () => import('../views/AdminServicosAdicionaisView.vue'),
	},
	{
		path: '/admin-usuarios',
		name: 'admin-usuarios',
		component: () => import('../views/AdminUsuariosView.vue'),
	},
	{
		path: '/admin-reservas',
		name: 'admin-reservas',
		component: () => import('../views/AdminReservasView.vue'),
	},
	{
		path: '/admin-enderecos',
		name: 'admin-enderecos',
		component: () => import('../views/AdminEnderecosView.vue'),
	},
	{
		path: '/admin-consumo',
		name: 'admin-consumo',
		component: () => import('../views/AdminConsumoView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
