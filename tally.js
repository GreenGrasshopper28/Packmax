var tally = 0;
var tally1=0;
var body = document.querySelector('body');
//var intervalIndex = 0;
var intervals = [];
var intervals1 = [];
body.onkeydown = function (e) {
  e.preventDefault();
    if (event.keyCode == 32) {
       tally += 1
       document.getElementById("tallyShow").style.transform = "translateY(-10px)";
       intervals.push(setInterval(moveBackDown, 201));
    }
    else if (event.keyCode == 8) {
       tally -= 1
       document.getElementById("tallyShow").style.transform = "translateY(10px)";
       intervals.push(setInterval(moveBackUp, 201));
    }
    else if (event.keyCode == 38) {
        tally1 += 1
        document.getElementById("tallyShow1").style.transform = "translateY(-10px)";
        intervals1.push(setInterval(moveBackDown, 201));
     }
     else if (event.keyCode == 40) {
        tally1 -= 1
        document.getElementById("tallyShow1").style.transform = "translateY(10px)";
        intervals1.push(setInterval(moveBackUp, 201));
     }
  console.log(intervals);
  console.log(intervals1);
  
  if (tally < 0) {
    tally = 0;
    }

    if (tally1 < 0) {
        tally1 = 0;
        }
  
  document.getElementById("tallyShow").innerText = tally;
  document.getElementById("tallyShow1").innerText = tally1;
};

function moveBackDown() {
//document.getElementById("tallyShow").style.transform = "translateY(10px)";
//document.getElementById("tallyShow1").style.transform = "translateY(10px)";
  clearInterval(intervals.pop());
}

function moveBackUp() {
//document.getElementById("tallyShow").style.transform = "translateY(-10px)";
//document.getElementById("tallyShow1").style.transform = "translateY(-10px)";
  clearInterval(intervals.pop());
}

/*var tally1 = 0;

var body1 = document.querySelector('body');
//var intervalIndex = 0;
var intervals1 = [];
body1.onkeydown = function (f) {
  f.preventDefault();
    if (event.keyCode == 38) {
       tally1 += 1
       document.getElementById("tallyShow1").style.transform = "translateY(-10px)";
       intervals1.push(setInterval(moveBackDown1, 201));
    }
    else if (event.keyCode == 40) {
       tally1 -= 1
       document.getElementById("tallyShow1").style.transform = "translateY(10px)";
       intervals1.push(setInterval(moveBackUp1, 201));
    }
  console1.log(intervals1);
  
  if (tally1 < 0) {
    tally1 = 0;
    }
  
  document.getElementById("tallyShow1").innerText = tally1;
};

function moveBackDown1() {
document.getElementById("tallyShow1").style.transform = "translateY(10px)";
  clearInterval(intervals1.pop());
}

function moveBackUp1() {
document.getElementById("tallyShow1").style.transform = "translateY(-10px)";
  clearInterval(intervals1.pop());
}
*/