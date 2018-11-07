require('GFX');

ready(function() {
	window.onload = function() {
		var g1 = new GFX('mycanvas1');
		g1.dragAndDrop(true);

		/*	
		var rect1 = new g1.Rectangle(300,100, 100, 100);
		rect1.color(0,0,255);
		rect1.style(g1.FILL);
		rect1.alpha(0.3);
		rect1.renderBoundingBox(true);
		rect1.renderCenter(true);
		*/
		///*
		var rect2 = new g1.Rectangle(300,100, 100, 100);
		//rect2.color(0,255,0);
		rect2.style(g1.DASHED);
		//rect2.alpha(0.3);
		//rect2.renderBoundingBox(true);
		//rect2.renderCenter(true);
		//rect2.renderBorder(true);
		//rect2.borderStyle(g1.DASHED);
		//rect2.inclination(30);
		//*/

		///*
		var poly1 = new g1.Polygon(500,100, 650,180, 650,280, 600,210, 500,280);
		poly1.style(g1.FILL);
		poly1.color(0,255,255);
		poly1.renderBorder(true);
		//poly1.borderStyle(g1.DASHED);
		poly1.renderBoundingBox(true);
		poly1.renderCenter(true);
		poly1.alpha(0.3);
		//poly1.inclination(30);

		var poly2 = new g1.Polygon(500,100, 650,180, 650,280, 600,210, 500,280);
		poly2.style(g1.FILL);
		poly2.color(0,255,255);
		poly2.renderBorder(true);
		//poly2.borderStyle(g1.DASHED);
		poly2.renderBoundingBox(true);
		poly2.renderCenter(true);
		poly2.alpha(0.3);
		//poly2.inclination(-30);
		//*/

		g1.render();

		g1.fillRect(500, 50, 150, 100, {color: {red: 255, green: 255, blue: 0} , alpha: 0.5});
		//var img = new g1.Image('card_back.jpg', 700, 150, 200, 400);
		//g1.updateScreen();

		///*
		anim1 = setInterval(function(){
			if (poly2._inclination < 90) {
				var inc = poly2.inclination();
				poly2.inclination(inc + 1);
				g1.updateScreen();
			}
		}, 50);
		//*/

		/*
		var v = 0;
		anim2 = setInterval(function(){
			rect2._lineDashOffset = v;
			v += 2;	
			g1.updateScreen();
		}, 100);
		*/
	};
});