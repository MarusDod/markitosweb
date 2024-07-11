import MyNavbar from "./navbar.js";
import About from "./about.js";
import Projects from "./projects.js";
import CenteredBlock from "./CenteredBlock.js";
import MyFooter from "./MyFooter.js";
import Interests from "./interests.js";
import Donate from "./donate.js";
import Page from "./Page.js";
import { useEffect } from "react";
import { debounce } from "lodash";
import Work from "./work.js";

const sections = ["about", "interests", "work", "projects", "donate", "findme"];

export default function Homepage() {
  useEffect(() => {
    const handler = debounce(() => {
      const documents = Object.fromEntries(
        sections.map((s) => [s, document.getElementById(s)])
      );

      for (let id of sections.slice().reverse()) {
        const winpos = window.scrollY;
        const elpos = documents[id].offsetTop;

        if (winpos > elpos) {
          window.location.hash = `#/#${id}`;
          break;
        }
      }
    }, 200);

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <Page>
      <MyNavbar />
      <CenteredBlock id="about">
        <About />
      </CenteredBlock>
      <CenteredBlock id="interests">
        <Interests />
      </CenteredBlock>
      <CenteredBlock id="work">
        <Work />
      </CenteredBlock>
      <CenteredBlock id="projects">
        <Projects />
      </CenteredBlock>
      <CenteredBlock id="donate">
        <Donate />
      </CenteredBlock>
      <MyFooter />
    </Page>
  );
}
