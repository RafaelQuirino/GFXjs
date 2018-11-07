__gfx_shapes.createQuadraticCurve = function(obj) {
	obj.QuadraticCurve = function() {
		this.type = gfx.QUADRATICCURVE;

		gfx.stack.push(this);
	};
};