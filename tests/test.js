require('GFX');

ready(function() {
	window.onload = function() {
		///*
		console.log('First canvas -----------------------------------------------------------------');

		var g1 = new GFX('mycanvas1');
		g1.dragAndDrop(true);

		var rect1 = new g1.Rectangle(100, 100, 200, 100);
		rect1.style(g1.FILL);
		rect1.color(255,0,0);
		rect1.renderBorder(true);
		rect1.borderColor(0,0,255);
		rect1.borderThickness(5);

		var circle1 = new g1.Circle(500, 150, 80);
		circle1.style(g1.FILL);
		circle1.color(0,255,0);
		circle1.renderBorder(true);
		circle1.borderColor(255,0,0);
		circle1.borderThickness(5);

		var poly1 = new g1.Polygon(700,50, 850,150, 850,250, 800,180, 700,250);
		poly1.style(g1.FILL);
		poly1.color(0,0,255);
		poly1.renderBorder(true);
		poly1.renderBoundingBox(true);
		poly1.renderCenter(true);
		poly1.alpha(0.3);

		var rect12 = new g1.Rectangle(950, 100, 200, 100);
		rect12.style(g1.FILL);
		rect12.color(255,0,255);
		rect12.renderBorder(true);
		rect12.borderColor(0,255,0);
		rect12.borderThickness(5);
		rect12.renderCenter(true);

		//g.setColor(0,255,255);		 //Does not exist yet
		//g.fillRect(600, 100, 100, 50); //Must fix Drawing.js

		console.log('Stack after creating shapes: ' + g1.stack);

		g1.render();
		//*/

		//---------------------------------------------------------------------

		///*
		console.log('\nLast canvas -------------------------------------------------------------------');

		var g2 = new GFX('mycanvas2');
		g2.dragAndDrop(true);

		var rect2 = new g2.Rectangle(410, 160, 50, 50);
		rect2.style(g2.FILL);
		rect2.color(255,255,0);
		rect2.renderBorder(true);

		var poly21 = new g2.Polygon(400,150, 500,150, 500,200, 400,200);//250,100, 350,150, 350,250, 300,150, 250,200);
		poly21.style(g2.FILL);
		poly21.color(0,0,255);
		poly21.renderBoundingBox(true);
		poly21.renderCenter(true);
		poly21.scale(20);

		/*
		var i = 0;
		setInterval(function() {
	        if (i++ < 50) {
	        	poly21.scale(1);
	        	poly21._alpha -= 0.015;
	        	poly21.translate(-4,0);
	        	poly21.translate(0,-1);
	        	g2.updateScreen();

	        	var ctx = g2.context;
	        	
	        	var p1 = [];
	        	p1[0] = {x: poly21._points[0]._x, y: poly21._points[0]._y}; 
	        	p1[1] = {x: poly21._points[1]._x, y: poly21._points[1]._y}; 
	        	p1[2] = {x: poly21._points[2]._x, y: poly21._points[2]._y}; 
	        	p1[3] = {x: poly21._points[3]._x, y: poly21._points[3]._y};
	        	
	        	var p2 = [];
	        	p2[0] = {x: rect2._points[0]._x, y: rect2._points[0]._y};
	        	p2[1] = {x: rect2._points[1]._x, y: rect2._points[1]._y}; 
	        	p2[2] = {x: rect2._points[2]._x, y: rect2._points[2]._y}; 
	        	p2[3] = {x: rect2._points[3]._x, y: rect2._points[3]._y};

	        	for (var k = 0; k < p1.length; k++) {
	        		ctx.beginPath();
					ctx.moveTo(p1[k].x, p1[k].y);
					ctx.lineTo(p2[k].x, p2[k].y);
					ctx.stroke();	
	        	}
	        }
	    }, 100);
		*/

		//var poly211 = new g2.Polygon(200,100, 350,150, 350,250, 300,200, 200,250);
		//poly211.style(g2.FILL);
		//poly211.color(0,255,255);
		//poly211.alpha(0.5);
		//poly211.renderBoundingBox(true);
		//poly211.renderCenter(true);
		//poly211.translate(500,0);
		//poly211.scale(50);


		//var poly22 = new g2.Polygon(900,80, 1000,50, 1050,150, 1000,280, 980,120);
		//poly22.style(g2.FILL);
		//poly22.color(255,0,0);
		//poly22.renderBoundingBox(true);
		//poly22.renderCenter(true);

		console.log('Stack after creating shapes: ' + g2.stack);

		g2.render();
		//*/

		console.log('\n------------------------------------------------------------------------------');

		//console.log(poly22.getCurrentBoundaries());
	};
});