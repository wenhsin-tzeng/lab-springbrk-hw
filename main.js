// var d = document.getElementById("yellowbutton");
//
// d.addEventlistener('click',function(){
//   d.className = d.className + "move";
//   d.style.backgroundColor = "hotpink";
// });

document.addEventListener("click", function(){
  document.body.style.background = "yellow";
});

var d = document.getElementById("yellowbutton");
d.addEventListener('mouseover',function(){
  d.style.backgroundColor = "hotpink";
});
d.addEventListener('mouseout',function(){
  d.style.backgroundColor = "yellow";
});
