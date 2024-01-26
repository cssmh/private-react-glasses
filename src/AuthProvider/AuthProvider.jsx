import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.config";
export const AuthContextAll = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const providerGoogle = new GoogleAuthProvider();
    const googlePopupLogin = () => {
        return signInWithPopup(auth, providerGoogle)
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

    const authValue = { user, googlePopupLogin }
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