import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Projects from "../Projects/Projects";
import Qualification from "../Qualification";
import Services from "../Services";
import Testimonials from "../Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <Qualification />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
