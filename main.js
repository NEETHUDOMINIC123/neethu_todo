function Ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
    if(this.readyState==4&&this.status==200){
      var data = JSON.parse(this.responseText);
      myFunction(data)
    }
  };
  xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
  xhttp.send();
  }
  Ajax();
  
  function myfunction(data){
    data.forEach( function (obj){
      $('#Demo').append('<input name="accesories"class="form-check-input"type="check"');
      console.log(obj.completed);
      if(obj.completed==true){
        $(":checkbox").prop("checked",true);
        $(":checkbox").prop("disabled",true);
      }
      });
  
      function disableCheckPromise(e) {
        return new Promise(function (resolve, reject) {
          e.disabled = true;
          resolve();
        });
      }
      function alertCompletionPromise(counter) {
          // console.log(counter)
          
        return new Promise(function (resolve, reject) {
          if (counter === 5) {
            alert("Congrats you have finished 5 tasks...");
          }
          resolve();
        });
      }
  
  
  
  
  
  
  
  
  }
  
  
  
  
  
  
  // Create a "close" button and append it to each list item
  var myNodelist = document.getElementsByTagName("LI");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
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
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
  // Create a new list item when clicking on the "Add" button
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
  function myFunction() {
      // Get the checkbox
      var checkBox = document.getElementById("myCheck");
      // Get the output text
      var text = document.getElementById("text");
    
      // If the checkbox is checked, display the output text
      if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
    }
  