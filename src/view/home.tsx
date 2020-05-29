import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Hacercade from "../components/Hacercade";
import Conocenos from "../components/Conocenos";
import Footer from "../components/Footer";




const Home: React.FC = () => { 
    return(
        <div>
            <Navbar/>
            <Main></Main>
            <Hacercade></Hacercade>
            <Conocenos></Conocenos>
            <Footer></Footer>
            
        </div>
    );

}

export default Home;