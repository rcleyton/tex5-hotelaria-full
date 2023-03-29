<template>
	<link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css" />
	<div class="bg_painel">
		<div class="painel">
			<div class="left-bar">
				<div class="logo"></div>
				<div class="left-content">
					<ul class="action-list">
						<li class="tabs">
							<i class="fa-solid fa-hotel"></i>
							<span>Minha Reserva</span>
						</li>

						<li class="tabs">
							<i class="fa-solid fa-tags"></i>
							<span>Falar com o Hotel</span>
						</li>
						<li class="tabs">
							<i class="fa-solid fa-star-half-stroke"></i>
							<span>Avaliar reserva</span>
						</li>
					</ul>
				</div>
				<div>
					<button class="button_form">Sair do painel</button>
				</div>
				<ul class="social">
					<li>
						<a href=""><i class="fab fa-facebook"></i></a>
					</li>
					<li>
						<a href=""><i class="fab fa-twitter"></i></a>
					</li>
					<li>
						<a href=""><i class="fab fa-instagram"></i></a>
					</li>
				</ul>
			</div>
			<div class="page-content">
				<div class="panel_header">Área do cliente</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
@use 'src/sass/sass-utils/_colors.scss' as v;
* {
	box-sizing: border-box;
	outline: none;
}

.logo {
	background-image: url('../assets/icons/logo_escrito.svg');
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	width: calc(128px + 3vw);
	height: 32px;
	margin: 1rem auto;

	@media (min-width: 768px) {
		background-image: url('../assets/icons/texhotel_logo2.svg');
		height: 96px;
	}
}

%flex {
	display: flex;
	align-items: center;
}

ul {
	list-style-type: none;
	padding: 0;
}

.painel {
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 1600px;
	margin: 3rem auto;
	height: 90vh;
	max-height: 1000px;
	background: #fff;
	border-radius: 4px;
	box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.2);
	overflow: hidden;
}

.left-bar {
	background-color: #1b263b;
	display: flex;
	border-right: 1px solid #e3e7f7;
	position: relative;
	flex-direction: column;
	align-items: stretch;
	justify-content: space-between;
}

.left-content {
	padding: 40px;
}

.tabs {
	@extend %flex;
	cursor: pointer;
	color: v.$light-gray;
	margin-bottom: 1.4rem;
	font-weight: 500;

	i {
		width: 20px;
		height: 20px;
		color: v.$light-yellow;
		margin-right: 10px;
	}
}

.page-content {
	display: flex;
	flex-direction: column;
	flex: 1;
	padding: 40px 20px 0 20px;

	.panel_header {
		font-size: 2rem;
		color: var(--main-color);
		margin-top: 30px;
		text-align: center;
	}
}

label .label-text {
	position: relative;
}

label .label-text:before {
	content: '';
	position: absolute;
	width: 14px;
	height: 14px;
	border: 1px solid #ddd;
	border-radius: 2px;
	left: -24px;
	transition: 0.2s ease;
}

.task-tabs:checked + label .label-text:before {
	background-color: var(--checkbox-color);
	border: none;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-size: 10px;
	background-position: center;
	border: 1px solid var(--checkbox-color);
}

.tag {
	font-size: 10px;
	padding: 4px 8px;
	border-radius: 20px;

	&.approved {
		background-color: var(--tag-color-one);
		color: var(--tag-color-text-one);
	}

	&.progress {
		background-color: var(--tag-color-two);
		color: var(--tag-color-text-two);
	}

	&.review {
		background-color: var(--tag-color-three);
		color: var(--tag-color-text-three);
	}

	&.waiting {
		background-color: var(--tag-color-four);
		color: var(--tag-color-text-four);
	}
}

.upcoming {
	border-bottom: 1px solid #ddd;
	padding-bottom: 30px;
	margin-bottom: 30px;
}

@media screen and (max-width: 900px) {
	.left-bar {
		display: none;
	}
}

@media screen and (max-width: 700px) {
	.painel {
		flex-direction: column;
		overflow-y: auto;
	}

	.right-bar,
	.page-content {
		width: 100%;
		display: block;
	}

	.tasks-wrapper {
		height: auto;
	}
}

@media screen and (max-width: 520px) {
	.page-content {
		padding: 40px 10px 0 10px;
	}

	.right-content {
		padding: 10px 16px;
	}

	.category {
		padding: 20px;
	}
}

.bg_painel {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	background: url(/src/assets/images/quarto_blur.jpg) fixed bottom;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	min-height: 100vh;
}

.social {
	display: flex;
	justify-content: space-evenly;
	flex-direction: row;

	.fab {
		color: #fff;
		font-size: 1.5rem;
		padding: 1rem;
		position: relative;
	}
}

.button_form {
	color: v.$dark-blue;
	background-color: v.$yellow;
	font-weight: 700;
	border-radius: 2rem;
	margin: 2rem auto;
	width: 80%;
	font-size: 1.2rem;
	padding: 1rem;

	&:hover {
		background-color: v.$light-blue;
		color: v.$light-gray;
	}

	@media (max-width: 768px) {
		width: 100%;
		margin: auto;
	}
}
</style>
