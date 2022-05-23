//Closing modal windows
var spanClose = document.getElementsByClassName("CloseModal");

for (var i = 0; i <= 4; i++) {
  spanClose[i].addEventListener('click', function() {
    this.parentElement.parentElement.style.display = "none";
  });
}

//Opening modal windows
var modal1 = document.getElementById("modalUsers");
var btn1 = document.getElementById("users");

btn1.onclick = function() {
  modal1.style.display = "block";
}

var modal2 = document.getElementById("modalBoard");
var btn2 = document.getElementById("board");

btn2.onclick = function() {
  modal2.style.display = "block";
}

var modal3 = document.getElementById("modalFilter");
var btn3 = document.getElementById("filter");

btn3.onclick = function() {
  modal3.style.display = "block";
}

var modal4 = document.getElementById("modalSettings");
var btn4 = document.getElementById("settings");

btn4.onclick = function() {
  modal4.style.display = "block";
}

var modalAdd = document.getElementById("modalAdd");
var btnAdd = document.getElementsByClassName("Plus");
var number;

for (var i = 0; i <= 4; i++) {
  btnAdd[i].addEventListener('click', function() {
    modalAdd.style.display = "block";
    number = parseInt(this.getAttribute("value"),10);
  });
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

  var findList = document.getElementsByClassName("taskLi");
  for (var i = 0; i < findList.length; i++) {
    findList[i].style.display = "none";
    if (findList[i].id.indexOf(taskId) != -1) {
      findList[i].style.display = "block";
    }
  }
}

document.getElementById("addElement").addEventListener('click', newElement);

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
      inputTags[i].checked = false;
    }
  }

  task.innerHTML = '<h1 class="taskTitle">' + titleInput + '</h1><p class="taskDescr">' + descrInput + '</p><div id="pass"><input type="file" name="" class="Input filesPass"><span class="passBtn" id="' + titleInput + 'Pass">Pass</span><span class="passBtn" id="' + titleInput + 'Cancel">Cancel</span><div class="tagsForThisTask">' + taskTags.innerHTML + '</div><p class="taskDate">Deadline: ' + dateInput +' </p></div>';

  task.className = "taskDoc " + titleInput + " " + taskId;
  li.id = titleInput + " " + taskId;
  li.className = "taskLi";

  if ((titleInput === '') || (dateInput === '') || (descrInput === '')) {
    alert("All the fields must be filled!");
  } else {
    document.getElementById("myUL"+number.toString()).appendChild(li);
    task.appendChild(backBtn);
    document.getElementById("Documentation").appendChild(task);

    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByClassName("taskLi");
    for (var i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    // Click on a close button to delete the current list item
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
        if (ev.target.className === "taskLi" || ev.target.className === "taskLi checked") {
          searchId = ev.target.id;
          for (var j = 0; j<=4; j++) {
            document.getElementsByClassName("Block")[j].style.display = "none";
          }
          document.getElementsByClassName(searchId)[0].style.display = "block";
        }
      }, false);
    }

    backBtn.addEventListener('click', function() {
      for (var i = 0; i<=4; i++) {
        document.getElementsByClassName("Block")[i].style.display = "block";
      }
      document.getElementsByClassName(searchId)[0].style.display = "none";
    });

    document.getElementById(titleInput + "Pass").addEventListener('click', function() {
      document.getElementById(searchId).className = "taskLi checked";
      document.getElementById(titleInput + "Pass").style.display = "none";
      document.getElementById(titleInput + "Cancel").style.display = "block";
    });

    document.getElementById(titleInput + "Cancel").addEventListener('click', function() {
      document.getElementById(searchId).className = "taskLi";
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