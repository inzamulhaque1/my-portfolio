import About from "../About";
import Banner from "../Banner";
import Contact from "../Contact";
import Experience from "../Experience";
import Projects from "../Projects/Projects";
import Qualification from "../Qualification";
import Services from "../Services";
import Testimonials from "../Testimonials";

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Experience />
            <Services />
            <Qualification />
            <Projects />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default Home;
