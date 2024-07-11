import Header from "./Header";
import Paragraph from "./Paragraph";
import GlartekLogo from "./assets/glartek_logo.svg";

export default function Work() {
  return (
    <>
      <Header>Work Experience</Header>
      <Paragraph center>
        I am a fullstack developer, so I am responsible on both frontend (React)
        and backend (Node and Graphql).
      </Paragraph>
      <Paragraph center>The company I work at is called Glartek.</Paragraph>
      <img
        src={GlartekLogo}
        alt={"glartek logo"}
        style={{ width: "inherit", padding: 8 }}
      />
      <Paragraph center>
        It is an industrial leader when it comes to aiding factory workers and
        improving their efficiency and safety, by doing away with outdated
        methods like paper routines and excel, and transitioning to a
        centralized platform that contains all the knowledge, making use of
        several interfaces such as Hololens, Apple Vision, Mobile and Web.
      </Paragraph>
    </>
  );
}
