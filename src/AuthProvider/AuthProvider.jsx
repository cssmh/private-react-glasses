import { createContext } from "react";
import PropTypes from 'prop-types';
export const AuthContextAll = createContext(null)

const AuthProvider = ({ children }) => {

    


    const authValue = { }
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