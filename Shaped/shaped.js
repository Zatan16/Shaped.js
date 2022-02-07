// constant PI
const PI = Math.PI;

// constant shape object
const shape = {
	// rectangle
	rect(length, width) {
		return {
			// perimeter: 2(l+b)
			perimeter: 2*(length+width),
			// area: l b
			area: length*width
		};
	},
	square(side) {
		// formulae of square
		return shape.rect(side, side);
	},
	// circle
	circle(radius) {
		return{
			// diameter: 2 r
			diameter: 2*radius,
			// circumferance: 2 PI r
			circumferance: 2*PI*radius,
			// area: PI r^2
			area: PI*(Math.pow(radius, 2))
		};
	},
	// triangle
	triangle(sides, base, height) {
		if(!(sides[0]+sides[1] > sides[2]) || !(sides[1]+sides[2] > sides[0]) || !(sides[2]+sides[0] > sides[1])) throw new SyntaxError("Sum of any two sides of a triangle should be greater than the other side");
		let ans = {
			// perimeter: s1+s2+s3
			perimeter: sides[0]+sides[1]+sides[2]
		}
		if(!base && !height) {
			// area: sqrt((p/2)((p/2)-s1)((p/2)-s2)((p/2)-s3))
			ans.area = Math.sqrt((ans.perimeter/2)*((ans.perimeter/2)-sides[0])*((ans.perimeter/2)-sides[1])*((ans.perimeter/2)-sides[2]));
		}else if(base && !height){
			// area: sqrt((p/2)((p/2)-s1)((p/2)-s2)((p/2)-s3))
			ans.area = Math.sqrt((ans.perimeter/2)*((ans.perimeter/2)-sides[0])*((ans.perimeter/2)-sides[1])*((ans.perimeter/2)-sides[2]));
			// height: (2 a)/b
			ans.height = (2*ans.area)/base;
		}else if(base && height) {
			// area: (b h)/2
			ans.area = (base*height)/2
		}
		return ans;
	},
	// polygon
	polygon(sides) {
		let add = 0;
		sides.forEach(e => {
			// add all the sides
			add += e;
		});
		return {
			// perimeter: addition of all the sides
			perimeter: add
		};
	},
	// trapezoid
	trapezoid(sides, height) {
		let ans = {
			// s1+s2+s3+s4
			perimeter: sides[0]+sides[1]+sides[2]+sides[3],
		}
		if(height) {
			// (s1+s2)h/2
			ans.area = (sides[0]+sides[1])*height/2;
		}
		return ans;
	},
	"pythagoras-theorum"(perpendicular, base) {
		return {
			// sqrt(p^2+b^2)
			hypotenuse: Math.sqrt(Math.pow(perpendicular, 2)+Math.pow(base, 2)),
		}
	},
	// sort number
	sort(mode, numbers) {
		if(mode == "asc"){
			numbers.sort((a, b) => {return a-b});
			if(mode == "des"){
				shape.sort("asc", numbers).reverse();
				throw new SyntaxError("Mode should be specified as asc or des for Ascending or Descending order respectively");
			}
		}
	},
	// draw shapes
	draw: {
		/* 
		ctx: context
		x, y: x and y positions
		width: shape width
		height: shape height
		stroke: line/border color
		fill: shape color
		thickness: line/border thickness
		*/
		// point
		point(ctx, x, y, stroke, thickness) {
			ctx.beginPath();
			this.rect(ctx, x, y, 1, 1, stroke, null, thickness);
			ctx.closePath();
		},
		// line
		line(ctx, x1, y1, x2, y2, stroke, thickness) {
			ctx.beginPath();
			ctx.lineWidth = thickness;
			ctx.strokeStyle = stroke;
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.stroke();
			ctx.closePath();
		},
		// rect
		rect(ctx, x, y, width, height, stroke, fill, thickness) {
			ctx.beginPath();
			ctx.fillStyle = fill;
			ctx.strokeStyle = stroke;
			ctx.lineWidth = thickness;
			ctx.rect(x, y, width, height);
			if(fill) ctx.fill();
			if(stroke) ctx.stroke();
			ctx.closePath();
		},
		// square
		square(ctx, x, y, side, stroke, fill, thickness) {
			this.rect(ctx, x, y, side, side, stroke, fill, thickness);
		},
		// arc
		arc(ctx, x, y, radius, startAngle, endAngle, counterClockwise, stroke, fill, thickness) {
			ctx.beginPath();
			ctx.fillStyle = fill;
			ctx.strokeStyle = stroke;
			ctx.lineWidth = thickness;
			ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
			if(fill) ctx.fill();
			if(stroke) ctx.stroke();
			ctx.closePath();
		},
		// circle
		circle(ctx, x, y, radius, stroke, fill, thickness) {
			this.arc(ctx, x, y, radius, 0, 2*Math.PI, false, stroke, fill, thickness);
		},
		// triangle
		triangle(ctx, x1, y1, x2, y2, x3, y3, stroke, fill, thickness) {
			ctx.beginPath();
			ctx.fillStyle = fill;
			ctx.strokeStyle = stroke;
			ctx.lineWidth = thickness;
			ctx.moveTo(x1, y1);
			ctx.lineTo(x2, y2);
			ctx.lineTo(x3, y3);
			if(fill) ctx.fill();
			if(stroke) ctx.stroke();
			ctx.closePath();
		},
		// polygon
		polygon(ctx, sides, stroke, fill, thickness) {0
			ctx.beginPath();
			ctx.strokeStyle = stroke;
			ctx.lineWidth = thickness;
			ctx.fillStyle = fill;
			ctx.moveTo(sides[0].x, sides[0].y);
			sides.forEach((v, i) => {
				if(sides[i+1]) {
					ctx.lineTo(sides[i+1].x, sides[i+1].y);
					// this.line(ctx, sides[i].x, sides[i].y, sides[i+1].x, sides[i+1].y, stroke, thickness);
				}
				else {
					ctx.lineTo(sides[0].x, sides[0].y);
					// this.line(ctx, sides[0].x, sides[0].y, sides[i].x, sides[i].y, stroke, thickness);
				}
			});
			if(stroke) ctx.stroke();
			if(fill) ctx.fill();
			ctx.closePath();
		},
	}
}
