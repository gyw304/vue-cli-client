<template>
	<nav class="navbar navbar-inverse">
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
