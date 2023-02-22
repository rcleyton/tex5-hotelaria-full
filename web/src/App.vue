<template>
  <router-view/>
  <NavBar />
  <FooterComponent />
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
import store from './store';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  },
	mounted: function() {
		if(window.localStorage.getItem('reserva')) {
			store.state.dadosReserva = JSON.parse(window.localStorage.getItem('reserva'));
		}
	}
}
</script>

<style>
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

</style>
