import { useMemo } from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";

export default function () {
  const age = useMemo(() => new Date().getFullYear() - 2001, []);

  return (
    <>
      <Header>About Marcos</Header>
      <Paragraph center>
        My full name is Marcos Daniel Oliveira Domingues. I am {age} years old.
      </Paragraph>
      <Paragraph center>
        I have successfully graduated in E.I. (Computer Engineering) in
        IPLeiria, after a lot of hard work.
      </Paragraph>
      <Paragraph center>
        I am a Fullstack Developer, and I love web development.
      </Paragraph>
    </>
  );
}
