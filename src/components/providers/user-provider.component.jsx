import React, { createContext, useState } from 'react';

export const UserContext = createContext(null);

/**
 * To pass the user for all of the components
 * @param {{
 *  children:React.ReactNode;
 * }} props 
 * @returns 
 */
const UserProvider = (props) => {
    const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')) || null);

    const deleteUser = () => {
        setUser(null);
        sessionStorage.removeItem('user');
    };
    
    const editUser = (newUser) => {
        setUser(newUser);
        sessionStorage.setItem('user', JSON.stringify(newUser));

        let usersFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
        for (let i = 0; i < usersFromLocalStorage.length; i++) {
            if (usersFromLocalStorage[i].userName === user.userName) {
                usersFromLocalStorage[i] = user;
            }
        }
        localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));
    };

    return (
        <UserContext.Provider value={{ user, setUser, deleteUser, editUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;