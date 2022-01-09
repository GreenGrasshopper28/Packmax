var tally1 = 0;

var body = document.querySelector('body');
//var intervalIndex = 0;
var intervals1 = [];
body.onkeydown = function (f) {
  f.preventDefault();
    if (event.keyCode == 38) {
       tally1 += 1
       document.getElementById("tallyShow1").style.transform = "translateY(-10px)";
       intervals.push(setInterval(moveBackDown, 201));
    }
    else if (event.keyCode == 40) {
       tally1 -= 1
       document.getElementById("tallyShow1").style.transform = "translateY(10px)";
       intervals.push(setInterval(moveBackUp, 201));
    }
  console.log(intervals);
  
  if (tally1 < 0) {
    tally1 = 0;
    }
  
  document.getElementById("tallyShow1").innerText = tally1;
};

function moveBackDown() {
document.getElementById("tallyShow1").style.transform = "translateY(10px)";
  clearInterval(intervals.pop());
}

function moveBackUp() {
document.getElementById("tallyShow1").style.transform = "translateY(-10px)";
  clearInterval(intervals.pop());
}