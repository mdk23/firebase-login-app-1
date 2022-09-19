// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyDsWq7Nlc724vxPhU8WlEqbt7eCXU8A52o",
  authDomain: "react-authentication-4b407.firebaseapp.com",
  projectId: "react-authentication-4b407",
  storageBucket: "react-authentication-4b407.appspot.com",
  messagingSenderId: "362239646148",
  appId: "1:362239646148:web:1c2dce76a827153019ac91",
  measurementId: "G-KGWP6SBTE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const google_provider= new GoogleAuthProvider();

// Função pode ser chamada em outros ficheiros mesmo que public( java) 
export  const auth=getAuth(app)


// Função pode ser chamada em outros ficheiros mesmo que public( java)
 export const signInWithGoogle=()=>{
    signInWithPopup(auth,google_provider).then((result) =>{
         const name = result.user.displayName;
         const email=result.user.email;
         const profile_pic=result.user.photoURL;

         localStorage.setItem("name",name);
         localStorage.setItem("email",email);
         localStorage.setItem("profile_pic",profile_pic);

    }).catch((error)=>{console.log(error);})

}