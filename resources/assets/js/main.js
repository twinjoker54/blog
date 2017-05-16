var Vue = require('vue');

Vue.component('task-list', {
	template: '<ol><task v-for="task in tasks">{{ task.task }}</task></ol>',
	
	data() {
		return {
			tasks: [
				{ task: 'Go the store', complete: true },
				{ task: 'Go the farm', complete: false },
				{ task: 'Go the mall', complete: true },
				{ task: 'Go the work', complete: true }
			]
		};
	}
});

Vue.component('task', {
	template: '<li><slot></slot></li>'
});

Vue.component('message', {
	
	props: ['title', 'body'],
	
	data() {
		return {
			isVisible: true
		};
	},
	
	template: `
			<article class="message" v-show="isVisible">
				<div class="message-header">
					<p>{{ title }}</p>
					<button class="delete" @click="isVisible = false"></button>
				</div>
				<div class="message-body">
					{{ body }}
				</div>
			</article>`,
});

new Vue({
	el: '#root'
});