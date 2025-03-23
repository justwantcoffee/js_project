import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebase';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen()
        }
    })

    function logInCheck() {

    }

    function userSignOut() {
        signOut(auth)
            .then(() => console.log('success'))
            .catch((e) => console.log(e))
    }

    return (
        <div>
            {authUser ? (
                <div>
                    <p>{`Signed in as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign out</button>
                </div>
            ) : (
                <p>Sighed out</p>
            )}
        </div>
    );
};

export default AuthDetails;