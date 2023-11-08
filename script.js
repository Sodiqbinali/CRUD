import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import {getDatabase, ref, set, child, update, remove, get} from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYX2G5C7A41lX7jlyxi5OrfNmCGwlWAK4",
  authDomain: "isah-31dca.firebaseapp.com",
  databaseURL: "https://isah-31dca-default-rtdb.firebaseio.com",
  projectId: "isah-31dca",
  storageBucket: "isah-31dca.appspot.com",
  messagingSenderId: "226099422465",
  appId: "1:226099422465:web:1357b156ffba6590eea700"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


let userId = document.querySelector('.userId'),
fullname = document.querySelector('.fullname'),
email = document.querySelector('.email'),
address = document.querySelector('.address'),
username = document.querySelector('.username'),
gender = document.querySelector('select'),
form = document.querySelector('form'),
dob = document.querySelector('.dob');

 const create = document.querySelector('#createBtn'),
 readbtn = document.querySelector('#readBtn'),
 updateRecord = document.querySelector('#updateBtn'),
 deletebtn = document.querySelector('#deleteBtn');

 