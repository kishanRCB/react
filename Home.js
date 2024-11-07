import { Link } from "react-router-dom";

function Home() {
    return(
        <div>
            <h1>this is home page</h1>
            <Link to="about">Click to view about page</Link><br></br>
            <Link to="contact">Click to view contact page</Link>
        </div>
    );    
}

export default Home;