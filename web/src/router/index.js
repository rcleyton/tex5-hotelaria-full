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
<<<<<<< HEAD
		path: '/minhasreservas',
		name: 'MinhasReservas',
		component: () => import('../views/MinhasReservas.vue'),
=======
		path: '/login',
		name: 'login',
		component: () => import('../views/LoginView.vue'),
>>>>>>> 17bc8018e72402a66ba0cfc12d5b106a3b63b9b3
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;