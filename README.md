# Shaped.js
Shaped.js is a free and open-source javascript library to do calculations related to shaped and draw shapes easily on the canvas

In this library there are two constants namely `PI` and `shape`.

`PI`
---
This is a shotform constant for Math.PI

`shape`
---
`shape` is the main constant of the shaped.js library. It contains all the methods to calculate and draw shapes.
The methods with their descriptions are given below:

These methods return an object containing the following:
```
rect(length, width) // area, perimeter
square(side) // area, perimeter
circle(radius) // diameter, circumferance, area
triangle(sides, [base], [height]) // if only is height not given, then height + area, perimeter in all other cases. Note: sides must be an Array with at least 3 numbers, if more than 3, only first 3 will be calculated
polygon(sides) // perimeter. Note: sides must ba an Array with at least 2 numbers
trapezoid(sides, height) // if height is given, then area + perimeter in all other cases/ Note: sides must be an Array with at least 4 numbers, is more than 4, only first 4 will be calculated. Note: first 2 elemenets of the Array will be taken as the parallel sides
pythagoras-theorum(perpendicular, base) // hypotenuse. Note: you might be wondering, how the heck I should call this function becauseit contains a hyphen/minus in its name, I defined it using double-quotes, so I was able to do that. To access it, you need to write like this shape["pythagoras-theorum(perpendicular, base)"] then you should write a dot and use its properties like hypotenuse
sort(mode, numbers) //
```

There is another property named as draw which is called using `shape.draw`, it is an object contianer basic methods to draw different shapes on HTML5 canvas.
But that topic is notwritten right now, but all the features are reaily available. You can open th project and understand what the code does if you want nbut if you don't have any knowledge about drawing on HTML5 canvas, then I recommend youto not open it as the notes on how to use it will be given shorlty.
