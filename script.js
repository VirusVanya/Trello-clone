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

var list = document.getElementsByClassName('taskList');
var tags = ["red","green","yellow","blue"];

// Filter the list items by the tags
function filter() {
  var inputTags = document.getElementsByClassName("inputTagsFilter");
  var taskId = "";

  for (var i = 0; i < inputTags.length; i++) {
    if (inputTags[i].checked == true) {
      taskId += tags[i];
    }
  }

  var findList = document.getElementsByTagName("LI");
  for (var i = 0; i < findList.length; i++) {
    findList[i].style.display = "none";
    if (findList[i].id.indexOf(taskId) != -1) {
      findList[i].style.display = "block";
    }
  }
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var titleInput = document.getElementById("newTitle").value;
  var dateInput = document.getElementById("newDate").value;
  var descrInput = document.getElementById("newDescr").value;
  var inputTags = document.getElementsByClassName("inputTagsAdd");
  
  var t = document.createTextNode(titleInput);

  var li = document.createElement("li");
  var task = document.createElement("div");
  var backBtn = document.createElement("div");
  var taskTags = document.createElement("div");

  li.appendChild(t);
  backBtn.innerHTML = '<span id="toMainpage">🠔</span>';
  
  var taskId = "";

  for (var i = 0; i < inputTags.length; i++) {
    if (inputTags[i].checked == true) {
      taskTags.innerHTML += '<div class="" style="background: ' + tags[i] + ';"></div>';
      taskId += tags[i];
    }
  }

  task.innerHTML = '<h1 class="taskTitle">' + titleInput + '</h1><p class="taskDescr">' + descrInput + '</p><div id="pass"><input type="file" name="" class="Input filesPass"><span class="passBtn" id="' + titleInput + 'Pass">Pass</span><span class="passBtn" id="' + titleInput + 'Cancel">Cancel</span><div class="tagsForThisTask">' + taskTags.innerHTML + '</div><p class="taskDate">Deadline: ' + dateInput +' </p></div>';

  task.className = "taskDoc " + titleInput + " " + taskId;
  li.id = titleInput + " " + taskId;

  task.style.position = "absolute";
  task.style.top = 85 + "px";

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
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function() {
        this.parentElement.remove();
        document.getElementsByClassName(this.parentElement.id)[0].remove();
      });
    }

    document.getElementById(titleInput + "Pass").style.display = "block";

    var searchId;

    for (var i = 0; i <= 4; i++) {
      list[i].addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
          searchId = ev.target.id;
          for (var j = 0; j<=4; j++) {
            document.getElementsByClassName("Block")[j].style.display = "none";
          }
          document.getElementsByClassName(searchId)[0].style.display = "block";
        }
      }, false);
    }

    backBtn.addEventListener('click', mainPage)

    function mainPage() {
      for (var i = 0; i<=4; i++) {
        document.getElementsByClassName("Block")[i].style.display = "block";
      }
      document.getElementsByClassName(searchId)[0].style.display = "none";
    }

    document.getElementById(titleInput + "Pass").addEventListener('click', function() {
      document.getElementById(searchId).className = "checked";
      document.getElementById(titleInput + "Pass").style.display = "none";
      document.getElementById(titleInput + "Cancel").style.display = "block";
    });

    document.getElementById(titleInput + "Cancel").addEventListener('click', function() {
      document.getElementById(searchId).className = '';
      document.getElementById(titleInput + "Cancel").style.display = "none";
      document.getElementById(titleInput + "Pass").style.display = "block";
    });

    document.getElementById("newTitle").value = "";
    document.getElementById("newDate").value = "";
    document.getElementById("newDescr").value = "";
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