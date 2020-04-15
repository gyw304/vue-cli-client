<template>
	<div class="detail">
		<div class="jumbotron" v-if="!has_userInfo">
			<h1>Welcome!</h1>
			<p>...</p>
			<p><button class="btn btn-primary btn-lg" @click="AddProfile">创建个人信息</button></p>
		</div>
		<div v-else>
			<p>{{user.description}}</p>
			<p v-for="item in user.skills" :key="item">{{item}}</p>
		</div>
	</div>
</template>

<script>
	import API from '../request/api'
	export default {
		name: 'Detail',
		data: () => {
			return {
				detail: '这是detail',
				has_userInfo : false,
				user: {

				}
			}
		},
		created: function() {
			this.axios.get(API.profiles, {}).then(res => {
				
				console.log(res.data)
				
				if(res.data.code == 1){
					this.has_userInfo = true
					this.user = res.data.data
				}else{
					this.has_userInfo = false
				}

			})
		},
		methods: {
			AddProfile : function(){
				this.$router.push('/AddProfile')
			}
		}
	}
</script>

<style scoped lang="scss">
</style>
