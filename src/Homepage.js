import MyNavbar from './navbar.js'
import About from './about.js';
import Projects from './projects.js';
import CenteredBlock from './CenteredBlock.js';
import MyFooter from './MyFooter.js';
import Interests from './interests.js';
import Donate from './donate.js';
import Page from './Page.js';

export default () => {

    return (
        <Page>
            <MyNavbar>
            </MyNavbar>
            <CenteredBlock id="about">
                <About />
            </CenteredBlock>
            <CenteredBlock id="interests">
                <Interests />
            </CenteredBlock>
            <CenteredBlock id="projects" >
                <Projects/>
            </CenteredBlock>
            <CenteredBlock id="donate" >
                <Donate/>
            </CenteredBlock>
            <MyFooter />
        </Page>
    )
}