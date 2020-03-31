<template>
	<div class="reg">
		<div class="form-group">
			<label>Email</label>
			<input type="email" class="form-control" placeholder="Email" v-model="email">
		</div>
		<div class="form-group">
			<label>Password</label>
			<input type="password" class="form-control" placeholder="Email" v-model="password">
		</div>
		<div class="form-group">
			<label>Name</label>
			<input type="text" class="form-control" placeholder="Name" v-model="name">
		</div>
		<button type="button" class="btn btn-primary btn-lg btn-block" @click="tap_reg">注册</button>
	</div>
</template>

<script>
	import API from '../request/api'
	export default {
		name: 'Reg',
		data: () => {
			return {
				email: '',
				password: '',
				name: ''
			}
		},
		methods: {
			tap_reg: function() {
				this.axios.post(API.reg, {
					email: this.email,
					password: this.password,
					name: this.name
				}, ).then(res => {
					if (res.data.code == 1) {
						this.$store.dispatch("setUser", res.data.data)
						this.$router.push("/Login")
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
