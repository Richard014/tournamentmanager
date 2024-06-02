import { auth } from "../config/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth"; 
import { useState } from "react";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signIn = async () => {
        try{
            await signInWithEmailAndPassword(auth, email, password);
        } catch(err){
            console.error(err);
        }
    };

    return (
        <div>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn}>Sign In</button>
            <button onClick={() => signOut(auth)}>Sign Out</button>
        </div>
    );
};