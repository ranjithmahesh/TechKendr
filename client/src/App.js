import Section3 from "./Section3";
import Footer from "./component/Footer";
import HeroBaner from "./component/HeroBaner";
import Hero from "./component/HeroPage";
import NavBar from "./component/NavBar";
import Section1 from "./component/Section1";
import Section2 from "./component/Section2";

export default function App() {
  return (
    <div className="">
      <div className="  ">
        <NavBar />
        <section>
          <Hero />
        </section>
        <section className="mt-10 ">
          <HeroBaner />
        </section>
        {/* Section1 */}
        <section className="mt-20  ">
          <Section1 />
        </section>
        {/* Section2 */}
        <section className=" bg-[#d6e9f0] mt-10 ">
          <Section2 />
        </section>
        {/* Section 3 */}
        <section className="mt-[50px] ">
          <Section3 />
        </section>

        <Footer />
      </div>
    </div>
  );
}
