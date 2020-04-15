<template>
	<!-- <nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav">
					<li>
						<router-link to="/login">登录</router-link>
					</li>
					<li>
						<router-link to="/reg">注册</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav> -->


	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" href="#">Blog</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbars">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link class="nav-link" to="/">首页</router-link>
					</li>
				</ul>
			</div>
		</div>
	</nav>

</template>

<script>
	export default {
		name: 'Nav',
		props: {
			msg: String
		},
		data: () => {
			return {
				test: 1
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
