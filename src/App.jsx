import "./styles/app.css";

import Header from "./sections/Header.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Testimonials from "./sections/Testimonials.jsx";
function App() {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Testimonials />
        </>
    );
}

export default App;
