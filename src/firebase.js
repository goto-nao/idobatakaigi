import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyCwfuU87ufbhT2uj0RVaz9S0rFSjLUJ3mo",
    authDomain: "chat-a9349.firebaseapp.com",
    projectId: "chat-a9349",
    storageBucket: "chat-a9349.appspot.com",
    messagingSenderId: "316914506715",
    appId: "1:316914506715:web:3b6599349afeab0814a5fe"
  };

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref('messages');

export const pushMessage =({name,text})=>{
messagesRef.push({name,text})
}
