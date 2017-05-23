Vue.component('modal', {
	template:`
			<div class="modal is-active">
				<div class="modal-background" @click="$emit('close')"></div>
				<div class="modal-content">
					<div class="box">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti excepturi illo maiores
							molestiae nam, quisquam tenetur voluptatem? Alias consequuntur excepturi facere hic ipsum
							labore maiores! Cumque eius fugiat id non?
						</p>
					</div>
				</div>
				<button class="modal-close" @click="$emit('close')"></button>
			</div>`
})

new Vue({
	el: '#root',
	
	data: {
		showModal: false
	}
	
});