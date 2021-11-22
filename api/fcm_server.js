const axios = require('axios');

var admin = require("firebase-admin");

var serviceAccount = require("./private_key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const PROJECT_ID = "chitchatapp-fa8d1";
const ACCESS_TOKEN ="AAAAI7UfALM:APA91bFxnhP63upDje5wwMFpXvW6BGSarT11z6FXbf9L8-ISXUn0e8W_PH-PenAHFcgc0dszq2LoZaAujrwT1I8tsOAlkNDzbl4rOkJDO070NLd7eKQuwq2JT-dT-zAsZTPaebz1nKwa";
const url = `https://fcm.googleapis.com/v1/projects/${PROJECT_ID}/messages:send`;
const USER_TOKEN = "fHlw-vnYHmGcIs79foMzdu:APA91bF3qBpxxR-HHJ7oINqJq8HBUnfjCBAL-wznc8S93iQ2SIZ1sQGhrmPX5Oegfm3vte_gHGJPqlw4AyB014MYlyaMa00JBfW_WcuIyfdR_SjG18_CWuWAD3TL5VXYeXQx3KYNzwho";
const data = {
    "message": {
      "token": USER_TOKEN,
      "notification": {
        "title": "Background Message Title",
        "body": "Background message body"
      },
      "webpush": {
        "fcm_options": {
          "link": "https://google.co.in"
        }
      }
    }
  }

const payload = {
    data: {
        key: "hai man"
    }
}

// axios.post(url,data,{
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `bearer ${ACCESS_TOKEN}`
//     }
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//       console.log(JSON.stringify(error))
//     // console.log(JSON.stringify(error.data.error,null,2));
//   });

  admin.messaging().sendToDevice(USER_TOKEN,payload).then((res)=>{
      console.log('sent successfully',res);
  }).catch((error)=>{
      console.log('Error:\n',error)
  })
