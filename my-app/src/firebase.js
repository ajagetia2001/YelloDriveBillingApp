import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYGSOWQV1kdD7v8TRnt8e5OOdlKzQX8fk",
  authDomain: "tutorial-628b4.firebaseapp.com",
  databaseURL: "https://tutorial-628b4-default-rtdb.firebaseio.com",
  projectId: "tutorial-628b4",
  storageBucket: "tutorial-628b4.appspot.com",
  messagingSenderId: "1043475574607",
  appId: "1:1043475574607:web:f91c458ff62fb3f7a55f3a"
};
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
