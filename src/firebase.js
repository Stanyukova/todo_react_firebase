import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyi5haTlH7c3S-pn0SiQk4nWswcc-jArI",
  authDomain: "todo-5750e.firebaseapp.com",
  projectId: "todo-5750e",
  storageBucket: "todo-5750e.appspot.com",
  messagingSenderId: "579500519959",
  appId: "1:579500519959:web:6413762e51c34c96fda252"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
export { db, storage };