require('GFX');

ready(function() {
	window.onload = function() {
		var g1 = new GFX('mycanvas1');
		g1.dragAndDrop(true);
		
		var img = new g1.Image('card_back.jpg', 700, 100, 100, 150);

		var rect = new g1.Rectangle(400,100,120,80);
		rect.style(g1.FILL);
		rect.color(0,255,255);

		console.log(g1.stack);
		console.log(g1.stack[0]._pixels);

		g1.render();

		var imageData = g1.context.getImageData(700,100,100,150);
		console.log(imageData);

		//g1.fillRect(500, 50, 150, 100, {color: {red: 255, green: 255, blue: 0} , alpha: 0.5});
	};
});