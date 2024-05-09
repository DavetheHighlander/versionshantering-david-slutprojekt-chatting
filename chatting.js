
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
// import { getDatabase, ref, set, onValue, remove, push, onChildAdded, onChildRemove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getDatabase, ref, set, onValue, remove, push, onChildAdded, onChildRemoved } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js';

const firebaseConfig = {
    databaseURL: 'https://chat-tin-default-rtdb.europe-west1.firebasedatabase.app',
    apiKey: "AIzaSyAw0aNn8cjTJB00ipeOqpmnXbaeFCXMSxk",
    authDomain: "chat-tin.firebaseapp.com",
    projectId: "chat-tin",
    storageBucket: "chat-tin.appspot.com",
    messagingSenderId: "37355753844",
    appId: "1:37355753844:web:97641a0c161e092e465c21",
    measurementId: "G-2BF0Q94HRM"

  };
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app); // <-----

  console.log(app);
  console.log(db);
// Reference to your database location you are saving chat messages
const messagesRef = ref(db, '/messages');

// Listen for form submit
document.getElementById('send-message').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get value
    const timestamp = Date.now();
    const chatTxt = document.getElementById('chat-txt').value;
    const colorTxt = document.getElementById('color-txt').value;
    const chatScrool = document.getElementById('chat');
    
    // Clear the chat text field
    document.getElementById('chat-txt').value = '';
    console.log({ 'msg': chatTxt, 'timestamp': timestamp, 'user': generateRandomUsername(), 'color': "#454454" })

    // Save the message
    push(messagesRef, { 'msg': chatTxt, 'timestamp': timestamp, 'user': generateRandomUsername(), 'color': colorTxt });
    chatScrool.scrollTop = chatScrool.scrollHeight;

  });


// Listen for child added event
onChildAdded(messagesRef, (data) => {
  const chatScrool = document.getElementById('chat');

    const messagesContainer = document.getElementById('messages');
  
    const htmlString = `
        <div class="message" style="background: ${data.val().color}">
          <img src="img/profile.png" alt="Profile Picture" class="profile-picture">
          <span class="sender">${data.val().user}: </span>
          <span class="content">${data.val().msg}</span>
        </div>
    `;
  
    // Append the HTML string to the messages container
    messagesContainer.insertAdjacentHTML('beforeend', htmlString);
    chatScrool.scrollTop = chatScrool.scrollHeight;

  });


function generateRandomUsername() {
    const nouns = ['unicorn', 'banana', 'Jessica', 'David', 'sun', 'robot'];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    return randomNoun;
  }