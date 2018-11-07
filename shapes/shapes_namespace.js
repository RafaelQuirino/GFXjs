var __gfx_shapes = {
	createAllShapes: function(obj) {
        __gfx_shapes.createShape(obj);
        __gfx_shapes.createPoint(obj);
        __gfx_shapes.createLine(obj);
        __gfx_shapes.createPolyline(obj);
        __gfx_shapes.createRectangle(obj);
        __gfx_shapes.createSquare(obj);
        __gfx_shapes.createPolygon(obj);
        __gfx_shapes.createArc(obj);
        __gfx_shapes.createQuadraticCurve(obj);
        __gfx_shapes.createBezierCurve(obj);
        __gfx_shapes.createEllipse(obj);
        __gfx_shapes.createCircle(obj);
        __gfx_shapes.createText(obj);
        __gfx_shapes.createTextBox(obj);
        __gfx_shapes.createImage(obj);
    },

    createInheritance: function(obj) {
        var s = new obj.Shape();
        obj.Point.prototype = s;
        obj.Line.prototype = s;
        obj.Polyline.prototype = s;
        obj.Rectangle.prototype = s;
        obj.Square.prototype = s;
        obj.Polygon.prototype = s;
        obj.Arc.prototype = s;
        obj.QuadraticCurve.prototype = s;
        obj.BezierCurve.prototype = s;
        obj.Ellipse.prototype = s;
        obj.Circle.prototype = s;
        obj.Text.prototype = s;
        obj.TextBox.prototype = s;
        obj.Image.prototype = s;
    },

    createShapes: function(obj) {
        this.createAllShapes(obj);
        this.createInheritance(obj);
    }
};