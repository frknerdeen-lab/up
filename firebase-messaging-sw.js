importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA6_yrK5hvQ4feXtlMY_8T9UyNatLDDyYY",
  authDomain: "upapp-d7286.firebaseapp.com",
  databaseURL: "https://upapp-d7286-default-rtdb.firebaseio.com",
  projectId: "upapp-d7286",
  storageBucket: "upapp-d7286.firebasestorage.app",
  messagingSenderId: "723719819100",
  appId: "1:723719819100:web:6e2d08cca61b45d669fb99"
});

const messaging = firebase.messaging();

// Fires when a push arrives while the app/tab is NOT in the foreground
// (closed, backgrounded, or phone locked). This is what makes reminders
// work even when UP isn't open.
messaging.onBackgroundMessage((payload) => {
  // Read from "data", not "notification" — a "notification" payload makes the
  // browser auto-display its own copy in addition to this one, causing a
  // duplicate. Using "data" only means this handler is the sole source.
  const title = (payload.data && payload.data.title) || 'UP';
  const body = (payload.data && payload.data.body) || '';
  self.registration.showNotification(title, {
    body,
    tag: 'up-reminder',
    renotify: true
  });
});
