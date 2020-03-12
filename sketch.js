
var form,filler;
var q1,q2,q3,name;
var database;

function setup() {
  createCanvas(800,800);
 database=firebase.database();
 form=new Form();
}

function draw() {
  background("white");  
  drawSprites();
  form.display();
}

 
 