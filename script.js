const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const width = canvas.width, height = canvas.height;

shape.draw.polygon(ctx, [
	{x: 100, y: 100},
	{x: 200, y: 100},
	{x: 200, y: 300},
	{x: 150, y: 250},
], "red", "green", 3);
