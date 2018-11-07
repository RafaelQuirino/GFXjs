__gfx_aux.Pixel = function(x, y, r, g, b, a) {
	this.x = x;
	this.y = y;
	this.color = new __gfx_aux.Color(r, g, b);
	this.alpha = a;

	this.draw = function() {

	};
};