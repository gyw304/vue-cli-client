<template>
	<div id="app">
		<Nav />
		<router-view />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Nav from './components/Nav.vue'

	export default {
		name: 'App',
		components: {
			Nav
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		background-color: #f6f6f6;
		height:100%
	}

	// #nav {
	//   padding: 30px;

	//   a {
	//     font-weight: bold;
	//     color: #2c3e50;

	//     &.router-link-exact-active {
	//       color: #42b983;
	//     }
	//   }
	// }
</style>
