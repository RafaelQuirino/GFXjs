var __gfx = {
    //Constants
    X_AXIS: 'x',
    Y_AXIS: 'y',
    Z_AXIS: 'z',
    BOX_SELECTION: 'box',
    ELLIPSE_SELECTION: 'ellipse',
    STROKE: 'stroke',
    DASHED: 'dashed',
    FILL: 'fill',
    POINT: 'Point',
    LINE: 'Line',
    POLYLINE: 'Polyline',
    RECTANGLE: 'Rectangle',
    SQUARE: 'Square',
    POLYGON: 'Polygon',
    ARC: 'Arc',
    QUADRATICCURVE: 'QuadraticCurve',
    BEZIERCURVE: 'BezierCurve',
    ELLIPSE: 'Ellipse',
    CIRCLE: 'Circle',
    TEXT: 'Text',
    TEXTBOX: 'TextBox',
    IMAGE: 'Image'

    /*
    start: function(endCallback, progressCallback) {
        var images = [];
        var total = gf.preloadingImages.length;

        for(var i=0; i<total; i++) {
            var image = new Image();
            image.src = gf.preloadingImages[i];
            images.push(image);
        }

        var preloadingPoller = setInterval(function() {
            var counter = 0;
            var total = gf.preloadingImages.length;
            for (var i=0; i<total; i++) {
                if (images[i].complete) {
                    counter++;
                }
            }
            if (counter == total) {
                if (progressCallback) progressCallback(100);
                clearInterval(preloadingPoller);
                endCallback();
                setInterval(gf.refresh, gf.baseRate);
                gf.time = (new Date()).getTime();
            } else {
                if (progressCallback) {
                    counter++;
                    progressCallback(parseInt((counter / total) * 100));
                }
            }
        }, 10);
    }
    */
};