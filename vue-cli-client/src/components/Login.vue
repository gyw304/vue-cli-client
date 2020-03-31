<template>
	<div class="login">
		<div class="form-group">
			<label>Email</label>
			<input type="email" class="form-control" placeholder="Email" v-model="email">
		</div>
		<div class="form-group">
			<label>Password</label>
			<input type="password" class="form-control" placeholder="Email" v-model="password">
		</div>
		<button type="button" class="btn btn-primary btn-lg btn-block" @click="tap_login">登录</button>
	</div>
</template>

<script>
	import API from '../request/api'
	export default {
		name: 'Login',
		data: () => {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			tap_login: function() {
				this.axios.post(API.login, {
					email: this.email,
					password: this.password
				}).then(res => {
					if (res.data.code == 1) {
						window.localStorage.setItem('token', res.data.data.token);
						this.$router.push('/detail')
					} else {
						alert(res.data.msg)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
