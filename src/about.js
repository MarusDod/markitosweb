import Header from "./Header";
import Paragraph from "./Paragraph";

export default () => (
    <>
        <Header>About Marcos</Header>
        <Paragraph center>My full name is Marcos Daniel Oliveira Domingues.
            I am {new Date().getFullYear() - 2001} years old. 
        </Paragraph>
        <Paragraph center>
            I have successfully graduated in E.I. (Computer Engineering?) in IPLeiria,
            after a lot of hard work.</Paragraph>
        <Paragraph center>
            I'd like to become a software engineer and <i>maybe</i> even create a startup one day.
        </Paragraph>
    </>
)