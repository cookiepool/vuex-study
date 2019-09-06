<template>
	<div class="hello">
		<h2>HelloWorld子组件-简单的store模式</h2>
		<p>{{ commonStates.states.msg }}</p>
	</div>
</template>

<script>
export default {
	props: {
		commonStates: Object
	},
	data() {
		return {

		}
	},
}
</script>

<style>

</style>