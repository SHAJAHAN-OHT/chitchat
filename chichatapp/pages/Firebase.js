import {firebase, initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKyKhs_uarn3PB9iRyY7xIIWoxhaQW8SY",
  authDomain: "chitchatapp-fa8d1.firebaseapp.com",
  projectId: "chitchatapp-fa8d1",
  storageBucket: "chitchatapp-fa8d1.appspot.com",
  messagingSenderId: "153362563251",
  appId: "1:153362563251:web:add2f5c5837606efb130c6",
  measurementId: "G-7XWDCYDHFV"
};

initializeApp(firebaseConfig);

export default firebase;