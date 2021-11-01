import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // update profile 
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                const newUser = { ...user, displayName: name };
                setUser(newUser)
            })
    }

    // sign in with google 
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // user state change 
    useEffect(() => {
        const unsubsribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);;
        });
        return () => unsubsribed;
    }, [])

    // log out 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setIsLoading(true);
            })
            .finally(() => {
                setIsLoading(false);;
            });
    }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        setUserName,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;