//Provides this.idx() attribute, which is a unique id
(function() {
    if ( typeof Object.prototype.idx == "undefined" ) {
        var id = 0;
        Object.prototype.idx = function() {
            if ( typeof this.__idx == "undefined" ) {
                this.__idx = id++;
            }
            return this.__idx;
        };
    }
})();

var __gfx_helpers = {
    min: function(arr) {
        if (arr.length > 0) {
            var res = arr[0];
            for (var i = 1; i < arr.length; i++)
                if (arr[i] < res)
                    res = arr[i];
            return res;
        } else {
            return null;
        }
    },

    max: function(arr) {
        if (arr.length > 0) {
            var res = arr[0];
            for (var i = 1; i < arr.length; i++)
                if (arr[i] > res)
                    res = arr[i];
            return res;
        } else {
            return null;
        }
    },

    distance: function(p1, pointOrLine) {
        if (pointOrLine.constructor === Array) {
            
            var line = pointOrLine;
            var v = line[0], w = line[1];

            function sqr(x) { return x * x }
            function dist2(v, w) { return sqr(v.x - w.x) + sqr(v.y - w.y) }
            function distToSegmentSquared(p, v, w) {
                var l2 = dist2(v, w);
                if (l2 == 0) return dist2(p, v);
                var t = ((p.x - v.x) * (w.x - v.x) + (p.y - v.y) * (w.y - v.y)) / l2;
                if (t < 0) return dist2(p, v);
                if (t > 1) return dist2(p, w);
                return dist2(p, 
                    {   
                        x: v.x + t * (w.x - v.x),
                        y: v.y + t * (w.y - v.y) 
                    }
                );
            }
            return Math.sqrt(distToSegmentSquared(p, v, w));

        } else {
            var p2 = pointOrLine;

            if (p1.x && p1.y && p2.x && p2.y)
                return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
            else
                return null;
        }
    },

    vecUnit: function(v) {
        var len = Math.sqrt(v.x * v.x + v.y * v.y);
        return { x: v.x / len, y: v.y / len };
    },

    vecMul: function(v, s) {
        return { x: v.x * s, y: v.y * s };
    },

    vecDot: function(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    },

    vecRot90CW: function(v) {
        return { x: v.y, y: -v.x };
    },

    vecRot90CCW: function(v) {
        return { x: -v.y, y: v.x };
    },

    polyIsCw: function(p) {
        return this.vecDot(
            this.vecRot90CW({ x: p[1].x - p[0].x, y: p[1].y - p[0].y }),
            { x: p[2].x - p[1].x, y: p[2].y - p[1].y }
        ) >= 0;
    },

    intersect: function(line1, line2) {
        var a1 = line1[1].x - line1[0].x;
        var b1 = line2[0].x - line2[1].x;
        var c1 = line2[0].x - line1[0].x;

        var a2 = line1[1].y - line1[0].y;
        var b2 = line2[0].y - line2[1].y;
        var c2 = line2[0].y - line1[0].y;

        var t = (b1*c2 - b2*c1) / (a2*b1 - a1*b2);

        return {
            x: line1[0].x + t * (line1[1].x - line1[0].x),
            y: line1[0].y + t * (line1[1].y - line1[0].y)
        };
    },

    expandPoly: function(p, distance) {
        var expanded = [];
        var rot = this.polyIsCw(p) ? this.vecRot90CCW : this.vecRot90CW;

        for (var i = 0; i < p.length; ++i) {

            // get this point (pt1), the point before it
            // (pt0) and the point that follows it (pt2)
            var pt0 = p[(i > 0) ? i - 1 : p.length - 1];
            var pt1 = p[i];
            var pt2 = p[(i < p.length - 1) ? i + 1 : 0];

            // find the line vectors of the lines going
            // into the current point
            var v01 = { x: pt1.x - pt0.x, y: pt1.y - pt0.y };
            var v12 = { x: pt2.x - pt1.x, y: pt2.y - pt1.y };

            // find the normals of the two lines, multiplied
            // to the distance that polygon should inflate
            var d01 = this.vecMul(this.vecUnit(rot(v01)), distance);
            var d12 = this.vecMul(this.vecUnit(rot(v12)), distance);

            // use the normals to find two points on the
            // lines parallel to the polygon lines
            var ptx0  = { x: pt0.x + d01.x, y: pt0.y + d01.y };
            var ptx10 = { x: pt1.x + d01.x, y: pt1.y + d01.y };
            var ptx12 = { x: pt1.x + d12.x, y: pt1.y + d12.y };
            var ptx2  = { x: pt2.x + d12.x, y: pt2.y + d12.y };

            // find the intersection of the two lines, and
            // add it to the expanded polygon
            expanded.push(this.intersect([ptx0, ptx10], [ptx12, ptx2]));
        }
        return expanded;
    },

    calculateBoundingBox: function(points) {
        var xarr = [], yarr = [];
        for (var i = 0; i < points.length; i++) {
            xarr.push(this._points[i].x());
            yarr.push(this._points[i].y());
        }

        //From top-left corner, clockwise
        var p1 = {x: __gfx_helpers.min(xarr), y: __gfx_helpers.min(yarr)};
        var p2 = {x: __gfx_helpers.max(xarr), y: __gfx_helpers.min(yarr)};
        var p3 = {x: __gfx_helpers.max(xarr), y: __gfx_helpers.max(yarr)};
        var p4 = {x: __gfx_helpers.min(xarr), y: __gfx_helpers.max(yarr)};

        return [p1, p2, p3, p4];
    },

    getBoundaryPoints: function(poly, bounds) {
        var bpts = [], lines = [];

        for(var i = 0; i < 4; i++) {
            bpts.push([]);
        }

        for (var i = 0; i < bounds.length; i++) {
            var idx1 = i, idx2 = i + 1 == bounds.length ? 0 : i + 1;
            var pt1 = bounds[idx1], pt2 = bounds[idx2];
            lines.push({pt1: pt1, pt2: pt2}); 
        }

        for (var lidx = 0; lidx < lines.length; lidx++) {
            var line = lines[lidx];

            for (var i = 0; i < poly.length; i++) {
                var point = poly[i];

                var x1 = line.pt1.x, y1 = line.pt1.y;
                var x2 = line.pt2.x, y2 = line.pt2.y;
                var x3 = point._x, y3 = point._y;

                var det = (x1*y2) + (y1*x3) + (x2*y3) - (y1*x2) - (x1*y3) - (y2*x3);

                if (det == 0) {
                    bpts[lidx].push({x: point.x(), y: point.y()});
                }
            }
        }

        return bpts;
    },

    getMousePos: function(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    },

    disableRightClick: function(canvas) {
        canvas.oncontextmenu = function() { return false; };
    },

    events: {
        preventDefault: function(e) {
            e = e || window.event;
            if (e.preventDefault) e.preventDefault();
            e.returnValue = false;  
        },

        //spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36,
        //left: 37, up: 38, right: 39, down: 40
        keys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
        keydown: function(e) {
            for (var i = __gfx_helpers.events.keys.length; i--;) {
                if (e.keyCode === __gfx_helpers.events.keys[i]) {
                    __gfx_helpers.events.preventDefault(e);
                    return;
                }
            }
        },

        wheel: function(e) {
            __gfx_helpers.events.preventDefault(e);
        },

        disable: function() {
            if (window.addEventListener) {
                window.addEventListener('DOMMouseScroll', __gfx_helpers.events.wheel, false);
            }
            window.onmousewheel = document.onmousewheel = __gfx_helpers.events.wheel;
            document.onkeydown = __gfx_helpers.events.keydown;
        },

        enable: function() {
            if (window.removeEventListener) {
                window.removeEventListener('DOMMouseScroll', __gfx_helpers.events.wheel, false);
            }
            window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
        }
    }//events
};//var __gfx_helpers