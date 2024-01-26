import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContextAll = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const providerGoogle = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        return signInWithPopup(auth, providerGoogle)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateNamePhoto = (name, img) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        })
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPass = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, (getUser)=> {
            console.log("Im observing on", getUser);
            setUser(getUser)
            setLoading(false)
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
        loading,
        forgotPass
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