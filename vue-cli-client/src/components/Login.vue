<template>
	<!-- <div class="login">
		<div class="form-group">
			<label>Email</label>
			<input type="email" class="form-control" placeholder="Email" v-model="email">
		</div>
		<div class="form-group">
			<label>Password</label>
			<input type="password" class="form-control" placeholder="Email" v-model="password">
		</div>
		<button type="button" class="btn btn-primary btn-lg btn-block" @click="tap_login">登录</button>
	</div> -->
	
	<div class="login">
		<div class="form-signin">
				<div class="text-center mb-4">
					<img class="mb-4" src="/docs/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
					<h1 class="h3 mb-3 font-weight-normal">Welcome</h1>
					<p>欢迎来到我的博客</p>
				</div>
		
				<div class="form-label-group">
					<input type="email" class="form-control" placeholder="Email address" required v-model="email">
					<label for="inputEmail">Email address</label>
				</div>
		
				<div class="form-label-group">
					<input type="password" class="form-control" placeholder="Password" required v-model="password">
					<label for="inputPassword">Password</label>
				</div>
		
				<button class="btn btn-lg btn-primary btn-block" @click="tap_login">登录</button>
				
		</div>
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
		mounted: () => {
			console.log(this)
		},
		methods: {
			tap_login: function() {
				this.axios.post(API.login, {
					email: this.email,
					password: this.password
				}).then(res => {
					if (res.data.code == 1) {
						console.log(res.data.data)
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
	
	.login{
		
	}
	
	.form-signin {
		width: 100%;
		max-width: 420px;
		padding: 15px;
		margin-top:-150px;
	}

	.form-label-group {
		position: relative;
		margin-bottom: 1rem;
	}

	.form-label-group>input,
	.form-label-group>label {
		height: 3.125rem;
		padding: .75rem;
	}

	.form-label-group>label {
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		margin-bottom: 0;
		/* Override default `<label>` margin */
		line-height: 1.5;
		color: #495057;
		pointer-events: none;
		cursor: text;
		/* Match the input under the label */
		border: 1px solid transparent;
		border-radius: .25rem;
		transition: all .1s ease-in-out;
	}

	.form-label-group input::-webkit-input-placeholder {
		color: transparent;
	}

	.form-label-group input:-ms-input-placeholder {
		color: transparent;
	}

	.form-label-group input::-ms-input-placeholder {
		color: transparent;
	}

	.form-label-group input::-moz-placeholder {
		color: transparent;
	}

	.form-label-group input::placeholder {
		color: transparent;
	}

	.form-label-group input:not(:placeholder-shown) {
		padding-top: 1.25rem;
		padding-bottom: .25rem;
	}

	.form-label-group input:not(:placeholder-shown)~label {
		padding-top: .25rem;
		padding-bottom: .25rem;
		font-size: 12px;
		color: #777;
	}
</style>
