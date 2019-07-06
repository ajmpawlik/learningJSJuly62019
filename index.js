const circle = {
  radius : 1,
  location : {
    x: 1,
    y: 1,
  },
  draw: function() {
    console.log('draw');
  }
};
circle.draw();

console.log("bllel");

circle.draw();
console.log(circle.radius);

if (circle.radius > 0)
 {
   console.log("That's right");
 }

//Factory function
function createCircle(radius) {
  return {
    radius, //the same as radius : radius
    draw: function() {
      console.log('draw');
    }
  };
}
const secondCircle = createCircle(2)

console.log("This is the second circle's radius");
console.log(secondCircle.radius);
console.log(secondCircle.draw());

//Constructor function

function Circle(radius, color) {
  this.radius = radius;
  this.color = color;
  this.draw = function() {
    console.log('draw');
  }
}

const anotherCircle = new Circle(1, "blue");

var x = { value: 10, length: 11, width: 2};
let y = x.value;

console.log(x.value + x.length + x.width);
console.log(x);

// dealing with scope of primitives and objects

var number = 10;

function increase(number) {
  number++;
}
increase(number);
console.log(number);
// the logged number is 10 because the increase is local to the function

var obj = {value: 10};
function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
console.log(obj.value)

//third version doesn't work because it is the primitive, not the object, and objects are passed by the reference
let number1 = 10;

function increase1(number1) {
  let increased = number1++;
  return increased;
}
let m = increase1(number1);
console.log(m);

// adding more properties after the class/constructor has been defined, further along the lines
circle.location = {x: 1}
// or with the other notation - brackets notation
const prototypeName = 'location'
circle['prototypeName'] = {x: 1}
console.log(circle['prototypeName'].x)

//To get all the keys
for (let key in circle) {
  if(typeof circle[key] !== 'function')
  console.log(key, circle[key]);
}

//To get all the keys
const keys = Object.keys(circle);
console.log(keys);

//To check for the existence of the property
if ('radius' in circle)
  console.log('Circle has a radius.');


//introducing complexity

function Cir(radius) {
  this.radius = radius
  let defaultLocation = {x: 0};
  var defaultLocation1 = {y: 0};
  this.getDefaultLocation = function() {
    console.log(defaultLocation)
  };
}

const cir = new Cir;
cir.getDefaultLocation();
//console.log(defaultLocation);- can't print this as defaultLocation is only in the scope of function and not beyond, bcs of let
//console.log(defaultLocation1); - tak samo z var
