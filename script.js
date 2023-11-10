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

  //creating new record
  const createData = () => {
    const dbref = ref(db);

    get(child(dbref,"TheRecord/"+ userId.value)).then((snapshot)=>{
        if(snapshot.exists()){
            alert("Record with Id already exist");
        } else {
            set(ref(db, "TheRecord/"+ userId.value),{
    fullname: fullname.value,
    email: email.value,
    address: address.value,
    username: username.value,
    gender: gender.value,
    dob: dob.value
}).then(()=>{
    alert("Record Stored Successfully");
    form.reset();
}).catch((error)=>{
    alert("unsuccessful, "+error)
});
        }
    }).catch((error)=>{
        alert("unsuccessful, "+error)
    });

}

//reading exist data
const readData = () =>{
    const dbref = ref(db);

    get(child(dbref,"TheRecord/"+ userId.value)).then((snapshot)=>{
        if(snapshot.exists()){
            fullname.value = snapshot.val().fullname;
            username.value = snapshot.val().username;
            email.value = snapshot.val().email;
            address.value = snapshot.val().address;
            gender.value = snapshot.val().gender;
            dob.value = snapshot.val().dob;
        } else {
            alert("No data found");
        }
    }).catch((error)=>{
        alert("unsuccessful, "+error)
    });
}

     //updating new record
     const updateData = () => {
        update(ref(db, "TheRecord/"+ userId.value),{
            fullname: fullname.value,
            email: email.value,
            address: address.value,
            username: username.value,
            gender: gender.value,
            dob: dob.value
        }).then(()=>{
            alert("update Stored Successfully");
            form.reset();
        }).catch((error)=>{
            alert("unsuccessful, "+error)
        });
     }

     //deleting new record
 const deleteData = () => {
    remove(ref(db, "TheRecord/"+ userId.value)).then(()=>{
        alert("Record Removed Successfully");
        form.reset();
    }).catch((error)=>{
        alert("unsuccessful, "+error)
    });
 }

 create.addEventListener('click', (e)=>{
    e.preventDefault();
    createData();
})

readbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    readData();
})

updateRecord.addEventListener('click', (e)=>{
    e.preventDefault();
    updateData();
})

deletebtn.addEventListener('click', (e)=>{
    e.preventDefault();
    deleteData();
})