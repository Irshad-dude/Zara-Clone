import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Contact/>
      <div className="h-16 w-full"></div>
      <Footer/>
    </>
  );
}

export default Home;