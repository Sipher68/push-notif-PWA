/* eslint-env es6 */
/* eslint-disable no-console */

importScripts(
  "https://www.gstatic.com/firebasejs/10.4.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.4.0/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyBPAaXEME5xaVH4C9YkelV1UxHrjkWmFw8",
  authDomain: "angular-ionic-b85fd.firebaseapp.com",
  projectId: "angular-ionic-b85fd",
  storageBucket: "angular-ionic-b85fd.appspot.com",
  messagingSenderId: "568534380093",
  appId: "1:568534380093:web:ffa38a4847a1498f8c0454",
  measurementId: "G-G94CMC8Y2D",
});
const messaging = firebase.messaging();
