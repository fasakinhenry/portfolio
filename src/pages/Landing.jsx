import {
  Experience,
  Footer,
  Header,
  Hero,
  Projects,
  Skills,
  Socials,
} from "../components";
import { PageSpace } from "../outlets";

const Landing = () => {
  return (
    <>
      <Header />
      <PageSpace>
        {/* Use padding-top instead of margin */}
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Socials />
        <Footer />
      </PageSpace>
    </>
  );
};

export default Landing;
