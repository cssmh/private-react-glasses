import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContextAll = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerGoogle = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        return signInWithPopup(auth, providerGoogle)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateNamePhoto = (name, img) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        })
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }




    const logOut = () => {
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (getUser)=> {
            console.log("Im observing on", getUser);
            setUser(getUser)
        })
        return ()=> {
            unSubscribe()
        }
    },[])

    const authValue = { 
        user, 
        googlePopupLogin, 
        createUser, 
        logOut, 
        updateNamePhoto,
        loginUser,
     }
    return (
        <AuthContextAll.Provider value={authValue}>
            {children}
        </AuthContextAll.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;