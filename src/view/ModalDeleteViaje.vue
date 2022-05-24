<template>

			<form>
				<div class="modal-header">						
					<h4 class="modal-title">Borrar Item</h4>
				</div>
				<div class="modal-body">					
					<p>Estas seguro que quieres borrar este item</p>
					<p class="text-warning"><small>Esta acción no se puede deshacer.</small></p>
				</div>
			</form>
</template>

<script>

export default {
    name: "ModalDeleteViaje",
    setup() {
        
        return{

        }
    },
}
</script>
