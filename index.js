// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    changeDOM()
    console.log("The DOM has loaded");
  });

  function changeDOM(){
    document.getElementById( "text" )
    .innerHTML = "This is really cool!";
  }