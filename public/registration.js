console.log("!!!!!!")
var config = {
    apiKey: "AIzaSyALphdHm28WXgHNEpphteKIha7V3xc0F9U",
    authDomain: "auction-8597b.firebaseapp.com",
    databaseURL: "https://auction-8597b.firebaseio.com",
    projectId: "auction-8597b",
    storageBucket: "auction-8597b.appspot.com",
    messagingSenderId: "1037285091147",
    appId: "1:1037285091147:web:9f85abc15f01153a3a2ace"
};
firebase.initializeApp(config);


var usersRef = firebase.database().ref('users');


document.getElementById('regForm').addEventListener('REGISTR', submitForm);


function submitForm(e){
  e.preventDefault();


  var name = getInputVal('name');
  var password = getInputVal('password');
  var email = getInputVal('email');

  saveUser(name, password, email);
  document.querySelector('.alert').style.display = 'block';
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);


  document.getElementById('regForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveUser(name, password, email) {
  var newUserRef = usersRef.push();
  newUserRef.set({
    name: name,
    password:password,
    email:email,
  });
}
