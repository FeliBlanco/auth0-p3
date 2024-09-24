import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {

    const { loginWithPopup } = useAuth0();
    
    return (
        <div>
            <button onClick={() => loginWithPopup()}>Log In</button>
        </div>
    )
}