// Initialize Firebase 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {setDoc,getFirestore, doc} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"
var firebaseConfig = {
  apiKey: "AIzaSyDRl9n7bOgYSegReCR0CFJ_BRb63IoKy0w",
  authDomain: "mess-maintainance.firebaseapp.com",
  projectId: "mess-maintainance",
  storageBucket: "mess-maintainance.appspot.com",
  messagingSenderId: "823193074711",
  appId: "1:823193074711:web:23d8c3fa137a8f15627052"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var hostel = getInputVal('hostel');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, hostel, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
async function  saveMessage(name, hostel, email, phone, message){
  await setDoc(doc(db, "contact", email), {
    'name': name,
    'hostel':hostel,
    'email':email,
    'phone':phone,
    'message':message
  });
}