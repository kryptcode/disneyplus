import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCwVQV4Mo45odO7HlBgZLbk7PcQZ-b828o",
    authDomain: "disneyplus-clone-6b1b6.firebaseapp.com",
    projectId: "disneyplus-clone-6b1b6",
    storageBucket: "disneyplus-clone-6b1b6.appspot.com",
    messagingSenderId: "300576027507",
    appId: "1:300576027507:web:7509dc01dab11dd7aacb06"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// const db = app.firestore()

// export { db };