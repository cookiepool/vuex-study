<template>
	<div>
		<app-simchild :commonStates="store"></app-simchild>
		<h2>Home父组件-简单的store模式</h2>
		<p>{{ msg }}</p>
		<button @click="handleChange">点击切换消息值</button>
	</div>
</template>

<script>
import storeObj from './simple_store.js';
import SimpleChild from './SimpleChild.vue';
export default {
	data() {
		const store = new storeObj(this)
		return {
			store,
		}
	},
	components: {
		'app-simchild': SimpleChild
	},
	computed: {
		msg() {
			return this.store.states.msg;
		}
	},
	methods: {
		handleChange() {
			this.store.commit('setMsg', 'Hello World!')
		}
	}
}
</script>

<style>

</style>