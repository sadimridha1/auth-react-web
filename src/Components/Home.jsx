import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Home = () => {
    const authInfo = useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
            <p>{authInfo.name}</p>
        </div>
    );
};

export default Home;