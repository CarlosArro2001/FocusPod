/* To do list code*/

var myNodelist = document.getElementsByTagName('LI');
var i;
for(i=0;i< myNodelist.length;i++){
    var span = document.createElement('span');
    var txt = document.createTextNode("\u00D7");
    span.className='close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list=document.querySelector('ul');
list.addEventListener('click',function(ev){
    if(ev.target.tagName==="LI"){
        ev.target.classList.toggle('checked');
    }
},false);
/*Adding a new task to the to do list*/
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

/* Starting of timer */
var min_el = document.getElementById('mins');
var mins = 0;
var seconds =59;
$('#start').click(function(){
      min_el.innerHTML = document.getElementById("time").value + ":";
      mins = parseInt(document.getElementById("time").value);
      startTimer();
});

$('#stop').click(function(){
      clearTimeout(timex);
});

$('#reset').click(function(){
  mins = parseInt(document.getElementById('time').value);
	seconds =0;
  $('#mins').html(mins+":");
  $('#seconds').html('00');
});

function startTimer(){
  timex = setTimeout(function(){
      seconds--;
    if(seconds < 0){
			seconds=59;
			mins--;
      min_el.innerHTML = mins;                 
	    if(mins<10){                     
	      $("#mins").text('0'+mins+':');
			}else $("#mins").text(mins+':');
    }    
    if(seconds <10){
      $("#seconds").text('0'+seconds);
		} else{
      $("#seconds").text(seconds);
      }
      startTimer();
  },1000);
}