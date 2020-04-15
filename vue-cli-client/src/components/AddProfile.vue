<template>
	<div class="login">
		<div class="form-group">
			<label>description-自我介绍</label>
			<input type="text" class="form-control" placeholder="Description" v-model="description">
		</div>
		<div class="form-group">
			<label>Skills-技能</label>
			<input type="text" class="form-control" placeholder="Email" v-model="skills">
		</div>
		<button type="button" class="btn btn-primary btn-lg btn-block" @click="tap">提交</button>
	</div>
</template>

<script>
	import API from '../request/api'
	export default {
		name: 'Login',
		data: () => {
			return {
				description: '',
				skills : ''
			}
		},
		mounted:()=>{
			console.log(this)
		},
		methods: {
			tap: function() {
				this.axios.post(API.profiles_create, {
					description: this.description,
					skills: this.skills
				}).then(res => {
					if (res.data.code == 1) {
						console.log('创建成功')
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
