import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Projects from "../Projects/Projects";
import Qualification from "../Qualification";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Qualification></Qualification>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;