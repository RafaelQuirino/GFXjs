__gfx_shapes.createArc = function(obj) {
	obj.Arc = function() {
		this.type = gfx.ARC;

		gfx.stack.push(this);
	};
};