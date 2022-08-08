import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { getDatabase,onValue,push, ref, remove, set, update  } from "firebase/database";
import { useState,useEffect } from "react";
import Toastify from "./toastNotify"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  databaseURL: process.env.REACT_APP_databaseURL,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
const auth = getAuth(app);

export const createUser = async (email, password, navigate, displayName) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(auth.currentUser, {
      displayName: displayName,
    });
    console.log(userCredential)
    navigate('/');
  } catch (error) {
    console.log(error)
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    let userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential)
    navigate('/');
  } catch (error) {
    console.log(error)
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};

export const ggProvider = (navigate) => {    //Need to add deploy link to Firebase
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      navigate('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

export const logOut = () => {
  signOut(auth);
};

const firebase = initializeApp(firebaseConfig);

export const AddBlog=(blog)=>{              // Send Data
  const data = getDatabase(firebase);
  const blogRef=ref(data,"blogs/")
  const newBlogRef=push(blogRef);
  set(newBlogRef,{
      title:blog.title,
      imgurl:blog.imgurl,
      content:blog.content
  })
}

export const GetBlog=()=>{                 // Get Data
   const [isLoading,setIsLoading]=useState();
   const [blogList,setBlogList]=useState();
  useEffect(() => {
      const data = getDatabase(firebase);
      const blogRef=ref(data,"blogs/")
      onValue(blogRef,(snapshot)=>{
          const getdata=snapshot.val();
          const blogArray=[]

          for (let id in getdata){
              blogArray.push({id,...getdata[id]})
          }
          setBlogList(blogArray)
          setIsLoading(false)
      })
  },[])
  return {isLoading,blogList}
}

export const DelBlog=(id)=>{
  const data = getDatabase(firebase);
  remove(ref(data,"blogs/"+id));
  Toastify("Deleted Successfully")
}

export const UpdateBlog=(blog)=>{
  const data = getDatabase(firebase);
  const updates={}
  updates["blogs/"+blog.id]=blog

  return update(ref(data),updates)

}

export default firebase;