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
var minutes;
var seconds;
function start(){
  clearInterval(interval);
  var min_el = document.getElementById('mins');
  var sec_el = document.getElementById('secs');
  minutes = parseInt(document.getElementById('time').value);
  seconds = 0;
  var interval = setInterval(
    function(){
        if(seconds ==0 && minutes ==0){
          clearInterval(interval)
          min_el.innerHTML = "00";
          sec_el.innerHTML = "00";
          alert();
        }
        else if (seconds == 0){
          minutes = minutes -1;
          seconds = 59;
          min_el.innerHTML = minutes;
          sec_el.innerHTML = seconds;
          document.title = minutes + ":" + seconds;
        }else if(seconds > 0){
          seconds = seconds - 1;
          min_el.innerHTML = minutes;
          sec_el.innerHTML = seconds;
          document.title = minutes + ":" + seconds;
        }
    },
    1000
  )
}

