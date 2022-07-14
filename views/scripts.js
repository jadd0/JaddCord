const socket = io("http://localhost:4000");

const firebaseConfig = {
    apiKey: "AIzaSyCt2uFhauN-5wY8W3djW6KXWenJB7U7F1I",
    authDomain: "fir-auth-fd4d7.firebaseapp.com",
    projectId: "fir-auth-fd4d7",
    storageBucket: "fir-auth-fd4d7.appspot.com",
    messagingSenderId: "823964788599",
    appId: "1:823964788599:web:03e6e245187d9b4bde6372"
};
firebase.initializeApp(firebaseConfig)
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// console.log(getAuth())
console.log(firebase.auth().currentUser)

socket.on("msg", (text) => {
    console.log(text)
})