var addUser = document.getElementById('addUser');
var close = document.getElementById('close');
var closeEdit = document.getElementById('closeEdit');
var addUserForm = document.forms.addUserForm;
var editUserForm = document.forms.editUserForm;

addUser.onclick = function() {
  addUserForm.style.display = "block";
  document.getElementsByClassName('black_overlay')[0].style.display = "block";
};

closeEdit.onclick = function () {
  editUserForm.style.display = "none";
  document.getElementsByClassName('black_overlay')[0].style.display = "none";
};

close.onclick = function () {
  addUserForm.style.display = "none";
  document.getElementsByClassName('black_overlay')[0].style.display = "none";
};

addUser.ondbclick = function() {
  addUserForm.style.display = "none";
  document.getElementsByClassName('black_overlay')[0].style.display = "none";
};

function del(id) {
  var xhr = new XMLHttpRequest();
  var path = '/?id='+id;
  xhr.open('DELETE', path, true);
  xhr.send();
  
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        window.location.reload(); 
    }
  };
}

function edit(id) {
  
  editUserForm.style.display = "block";
  document.getElementsByClassName('black_overlay')[0].style.display = "block";
  
  var nameelement = document.getElementById('firstNameEdit');
  var surnameelement = document.getElementById('surnameEdit');
  var ageeelement = document.getElementById('ageEdit');

  document.getElementById("editSubmit").onclick = function () {
    
    var xhr = new XMLHttpRequest();
    var path = '/';
    xhr.open('PUT', path, true);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.send(JSON.stringify({
      "id": id,
      "firstName": nameelement.value,
      "surname": surnameelement.value,
      "age": ageeelement.value
  }));

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        window.location.reload(); 
      }
    };
  };

}