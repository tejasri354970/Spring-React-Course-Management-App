import React, {useEffect} from "react";
const Home = () =>{
    useEffect(()=>{
        document.title="Welcome Home"
    }, []);
    return(
        <div className="text-center">
                <h1>Spring Boot Application</h1>
                <p>
                    This is practice app which will be connected with spring
                </p>
        </div>
    );
}

export default Home;