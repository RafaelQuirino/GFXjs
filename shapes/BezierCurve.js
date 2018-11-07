__gfx_shapes.createBezierCurve = function(obj) {
	obj.BezierCurve = function() {
		this.type = gfx.BEZIERCURVE;

		gfx.stack.push(this);
	};
};