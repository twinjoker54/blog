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

new Vue({
	el: '#root',
});