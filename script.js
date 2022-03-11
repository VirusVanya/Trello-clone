var modal1 = document.getElementById("modalUsers");
var btn1 = document.getElementById("users");
var span1 = document.getElementsByClassName("CloseModal")[0];

btn1.onclick = function() {
	modal1.style.display = "block";
}

span1.onclick = function() {
	modal1.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal1) {
	  modal1.style.display = "none";
	}
}


var modal2 = document.getElementById("modalBoard");
var btn2 = document.getElementById("board");
var span2 = document.getElementsByClassName("CloseModal")[1];

btn2.onclick = function() {
	modal2.style.display = "block";
}

span2.onclick = function() {
	modal2.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal2) {
	  modal2.style.display = "none";
	}
}


var modal3 = document.getElementById("modalFilter");
var btn3 = document.getElementById("filter");
var span3 = document.getElementsByClassName("CloseModal")[2];

btn3.onclick = function() {
	modal3.style.display = "block";
}

span3.onclick = function() {
	modal3.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal3) {
	  modal3.style.display = "none";
	}
}


var modal4 = document.getElementById("modalSettings");
var btn4 = document.getElementById("settings");
var span4 = document.getElementsByClassName("CloseModal")[3];

btn4.onclick = function() {
	modal4.style.display = "block";
}

span4.onclick = function() {
	modal4.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modal4) {
	  modal4.style.display = "none";
	}
}


var modalAdd = document.getElementById("modalAdd");
var btnAdd1 = document.getElementsByClassName("Plus")[0];
var btnAdd2 = document.getElementsByClassName("Plus")[1];
var btnAdd3 = document.getElementsByClassName("Plus")[2];
var btnAdd4 = document.getElementsByClassName("Plus")[3];
var btnAdd5 = document.getElementsByClassName("Plus")[4];
var spanAdd = document.getElementsByClassName("CloseModal")[4];
var number;

btnAdd1.onclick = function() {
	modalAdd.style.display = "block";
	number = 1;
}

btnAdd2.onclick = function() {
	modalAdd.style.display = "block";
	number = 2;
}

btnAdd3.onclick = function() {
	modalAdd.style.display = "block";
	number = 3;
}

btnAdd4.onclick = function() {
	modalAdd.style.display = "block";
	number = 4;
}

btnAdd5.onclick = function() {
	modalAdd.style.display = "block";
	number = 5;
}

spanAdd.onclick = function() {
	modalAdd.style.display = "none";
}

window.onclick = function(event) {
	if (event.target == modalAdd) {
	  modalAdd.style.display = "none";
	}
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
for (var i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
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

// Add a "checked" symbol when clicking on a list item
var list = document.getElementsByClassName('taskList');
/*for (var i = 0; i <= 4; i++) {
	list[i].addEventListener('click', function(ev) {
  	if (ev.target.tagName === 'LI') {
    	ev.target.classList.toggle('checked');
  	}
	}, false);
}*/

// Create a new list item when clicking on the "Add" button
function newElement() {
  var titleInput = document.getElementById("newTitle").value;
  var dateInput = document.getElementById("newDate").value;
  var descrInput = document.getElementById("newDescr").value;
  
  var t = document.createTextNode(titleInput);
  
  var li = document.createElement("li");
  var task = document.createElement("div");
  var backBtn = document.createElement("div");

  li.appendChild(t);
  task.innerHTML = '<h1 class="taskTitle">' + titleInput + '</h1><p class="taskDescr">' + descrInput + '</p><p class="taskDate">' + dateInput + '</p>';
  backBtn.innerHTML = "<button>Back</button>";

  task.id = titleInput;
  task.className = "taskDoc";
  li.className = titleInput;

  task.style.position = "absolute";
  task.style.top = 85 + "px";
  backBtn.style.position = "relative";
  backBtn.style.top = 85 + "px";

  if ((titleInput === '') || (dateInput === '') || (descrInput === '')) {
    alert("All the fields must be filled!");
  } else {
    switch (number) {
      case 1:
        document.getElementById("myUL1").appendChild(li);
        break;
      case 2:
        document.getElementById("myUL2").appendChild(li);
        break;
      case 3:
        document.getElementById("myUL3").appendChild(li);
        break;
      case 4:
        document.getElementById("myUL4").appendChild(li);
        break;
      case 5:
        document.getElementById("myUL5").appendChild(li);
        break;
    }
    task.appendChild(backBtn);
    document.getElementById("Documentation").appendChild(task);

    var searchId;

    for (var i = 0; i <= 4; i++) {
      list[i].addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          searchId = ev.target.className;
          for (var j = 0; j<=4; j++) {
            document.getElementsByClassName("Block")[j].style.display = "none";
          }
          document.getElementById(searchId).style.display = "block";
        }
      }, false);
    }

    backBtn.addEventListener('click', mainPage)

    function mainPage() {
      for (var i = 0; i<=4; i++) {
        document.getElementsByClassName("Block")[i].style.display = "block";
      }
      document.getElementById(searchId).style.display = "none";
    }
  }
  document.getElementById("newTitle").value = "";
  document.getElementById("newDate").value = "";
  document.getElementById("newDescr").value = "";

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

//Change board name
var boardNameInput = document.getElementById("nameForBoard");
var boardName = document.getElementById("name");
var nameBtn = document.getElementById("nameBtn");

nameBtn.addEventListener('click', changeName);

function changeName() {
  let name = boardNameInput.value;
  if (name === "") {
    alert("New board must have name!");
  } else {
    boardName.innerHTML = "<p>" + name + "</p>";
  }
  boardNameInput.value = "";
}

/*
function newElement() {
  var titleInput = document.getElementById("newTitle").value;
  var dateInput = document.getElementById("newDate").value;
  var descrInput = document.getElementById("newDescr").value;
  
  var t = document.createTextNode(titleInput);
  
  var li = document.createElement("li");
  var task = document.createElement("div");
  var backBtn = document.createElement("div");

  li.appendChild(t);
  task.innerHTML = '<h1 class="taskTitle">' + titleInput + '</h1><p class="taskDescr">' + descrInput + '</p><p class="taskDate">' + dateInput + '</p>';
  backBtn.innerHTML = "<button>Back</button>";
  if ((titleInput === '') || (dateInput === '') || (descrInput === '')) {
    alert("All the fields must be filled!");
  } else {
    switch (number) {
      case 1:
        document.getElementById("myUL1").appendChild(li);
        document.getElementById("taskDoc1").appendChild(backBtn);
        document.getElementById("taskDoc1").appendChild(task);
        
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            var i;
            for (i = 0; i<=4; i++) {
              document.getElementsByClassName("Block")[i].style.display = "none";
            }
            document.getElementById("taskDoc1").style.display = "block";
          }
        }, false);

        backBtn.addEventListener('click', mainPage)

        function mainPage() {
          var i;
          for (i = 0; i<=4; i++) {
            document.getElementsByClassName("Block")[i].style.display = "block";
          }
          document.getElementById("taskDoc1").style.display = "none";
        }
        break;
      case 2:
        document.getElementById("myUL2").appendChild(li);
        document.getElementById("taskDoc2").appendChild(backBtn);
        document.getElementById("taskDoc2").appendChild(task);
        
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            var i;
            for (i = 0; i<=4; i++) {
              document.getElementsByClassName("Block")[i].style.display = "none";
            }
            document.getElementById("taskDoc2").style.display = "block";
          }
        }, false);

        backBtn.addEventListener('click', mainPage)

        function mainPage() {
          var i;
          for (i = 0; i<=4; i++) {
            document.getElementsByClassName("Block")[i].style.display = "block";
          }
          document.getElementById("taskDoc2").style.display = "none";
        }
        break;
      case 3:
        document.getElementById("myUL3").appendChild(li);
        document.getElementById("taskDoc3").appendChild(backBtn);
        document.getElementById("taskDoc3").appendChild(task);
        
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            var i;
            for (i = 0; i<=4; i++) {
              document.getElementsByClassName("Block")[i].style.display = "none";
            }
            document.getElementById("taskDoc3").style.display = "block";
          }
        }, false);

        backBtn.addEventListener('click', mainPage)

        function mainPage() {
          var i;
          for (i = 0; i<=4; i++) {
            document.getElementsByClassName("Block")[i].style.display = "block";
          }
          document.getElementById("taskDoc3").style.display = "none";
        }
        break;
      case 4:
        document.getElementById("myUL4").appendChild(li);
        document.getElementById("taskDoc4").appendChild(backBtn);
        document.getElementById("taskDoc4").appendChild(task);
        
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            var i;
            for (i = 0; i<=4; i++) {
              document.getElementsByClassName("Block")[i].style.display = "none";
            }
            document.getElementById("taskDoc4").style.display = "block";
          }
        }, false);

        backBtn.addEventListener('click', mainPage)

        function mainPage() {
          var i;
          for (i = 0; i<=4; i++) {
            document.getElementsByClassName("Block")[i].style.display = "block";
          }
          document.getElementById("taskDoc4").style.display = "none";
        }
        break;
      case 5:
        document.getElementById("myUL5").appendChild(li);
        document.getElementById("taskDoc5").appendChild(backBtn);
        document.getElementById("taskDoc5").appendChild(task);
        
        list.addEventListener('click', function(ev) {
          if (ev.target.tagName === 'LI') {
            var i;
            for (i = 0; i<=4; i++) {
              document.getElementsByClassName("Block")[i].style.display = "none";
            }
            document.getElementById("taskDoc5").style.display = "block";
          }
        }, false);

        backBtn.addEventListener('click', mainPage)

        function mainPage() {
          var i;
          for (i = 0; i<=4; i++) {
            document.getElementsByClassName("Block")[i].style.display = "block";
          }
          document.getElementById("taskDoc5").style.display = "none";
        }
        break;
    }
  }
  document.getElementById("newTitle").value = "";
  document.getElementById("newDate").value = "";
  document.getElementById("newDescr").value = "";

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

*/