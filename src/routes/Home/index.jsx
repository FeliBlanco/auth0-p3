import { useAuth0 } from "@auth0/auth0-react";


export default function Home() {
    const { user } = useAuth0();

    console.log(user)
    return (
        <div>
            <span>Bienvenido {user.given_name}!</span> <img src={user.picture}/>

            <button onClick={() => window.location.href = "/logout"}>Logout</button>
        </div>
    )
}