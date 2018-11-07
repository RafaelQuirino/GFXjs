__gfx_shapes.createTextBox = function(obj) {
	obj.TextBox = function() {
		this.type = obj.TEXTBOX;
		
	    obj.stack.push(this);
	};
};