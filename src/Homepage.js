import MyNavbar from './navbar.js'
import About from './about.js';
import Projects from './projects.js';
import CenteredBlock from './CenteredBlock.js';
import MyFooter from './MyFooter.js';
import Interests from './interests.js';
import Donate from './donate.js';
import Page from './Page.js';
import { createRef, useEffect, useRef } from 'react';
import { debounce } from 'lodash';


export default () => {
    const sections = {"about": createRef(),"interests": createRef(),"projects": createRef(),"donate": createRef()}

    useEffect(() => {
        const handler = debounce(() => {
            const reversedKeys = Object.keys(sections).reverse()

            for(let id of reversedKeys){
                const winpos = window.scrollY
                const elpos = sections[id].current.offsetTop

                if(winpos > elpos){
                    window.location.hash = `#/#${id}`
                    break;
                }
            }
        },200)

        window.addEventListener('scroll',handler)

        return () => window.removeEventListener('scroll',handler)
    })

    return (
        <Page>
            <MyNavbar />
            <CenteredBlock ref={sections["about"]} id="about">
                <About />
            </CenteredBlock>
            <CenteredBlock ref={sections["interests"]} id="interests">
                <Interests />
            </CenteredBlock>
            <CenteredBlock ref={sections["projects"]} id="projects" >
                <Projects/>
            </CenteredBlock>
            <CenteredBlock ref={sections["donate"]} id="donate" >
                <Donate/>
            </CenteredBlock>
            <MyFooter />
        </Page>
    )
}
