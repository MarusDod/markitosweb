import MyNavbar from './navbar.js'
import About from './about.js';
import Projects from './projects.js';
import CenteredBlock from './CenteredBlock.js';
import MyFooter from './MyFooter.js';
import Interests from './interests.js';

export default () => {

    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <MyNavbar>
            </MyNavbar>
            <CenteredBlock>
                <About id="about" />
            </CenteredBlock>
            <CenteredBlock id="projects" >
                <Projects/>
            </CenteredBlock>
            <CenteredBlock id="interests">
                <Interests />
            </CenteredBlock>
            <MyFooter />
        </div>
    )
}