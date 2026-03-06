import { createContext, useState, useContext } from 'react';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('Token'));

    const login = (token) => {
        localStorage.setItem('Token', token);
        setIsLoggedIn(true);
    };
    const logout = () => {
        localStorage.removeItem('Token');
        setIsLoggedIn(false);
    };
    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
};
