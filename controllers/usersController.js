var users = require('../data/users.json'); // data users

exports.read = function(req, res) { // GET on start
  console.log("get");
  res.render('index', { title: 'CRUD/Home', data: users }); // response render "Index page", adds data to model
};

exports.create = function(req, res) { //POST for adding user
  var newUser = req.body; // request body -> data inside request
  newUser.id = users.length;
  users.push(newUser);
  res.location('/');
  res.redirect('/');
};

exports.update = function(req, res) { //PUT for editing 
  var editUser = req.body;
  var idx;
  users.forEach(function(item,index){
      if(item.id == editUser.id){
          console.log(index);
          idx = index;
      }
  });
  users[idx] = editUser;
  res.end();
};


exports.delete = function(req, res) { //DELETE
  var id = req.params.id; //todo: check all array for user ID  DONE
  var idx;
  users.forEach(function(item,index){
      if(item.id == id){
          console.log(index);
          idx = index;
      }
  });
  users.splice(idx, 1);
  res.end();
};