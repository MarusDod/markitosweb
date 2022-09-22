import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Perfil from './assets/perfil.png'
import {Container, Dropdown, DropdownButton, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import MyHashLink from './MyHashLink'

export default () => {
    const socials = {
        'E-mail': "mailto: markitos.2001@hotmail.com",
        'LinkedIn': "https://www.linkedin.com/in/marus-dod-b850b0232",
        'Telegram': "https://telegram.me/MarusDod",
        'Github': "https://github.com/MarusDod",
        'Discord': "https://discord.com/channels/@me/975711811083067422/",
        'Youtube': "https://www.youtube.com/channel/UC93Ccuez4vzuZpC4TPoB2UA",
        'Instagram': "https://www.instagram.com/marcos_domingues2001",
        'Facebook': "https://www.facebook.com/marus.dod/",
    }

    return (
        <Navbar fixed="top" variant="dark" expand="sm" style={{backgroundColor: "rgba(33, 36, 181, 0.3)",width:"100%"}}>
            <Container fluid>
                <NavbarBrand style={{display:"flex",gap:"10px",margin:0,padding:0,alignItems:"center"}} >
                    <img
                        src={Perfil}
                        width="40px"
                        height="40px"
                        className="d-inline-block align-top"
                        alt="eu haha"
                        style={{borderRadius:"20px"}}
                    /> 
                    <div>
                        Marcos Domingues
                    </div>
                </NavbarBrand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav navbarScroll variant="pills">
                        <MyHashLink to="/#about">About</MyHashLink>
                        <MyHashLink to="/#interests">Interests</MyHashLink>
                        <MyHashLink to="/#projects">Projects</MyHashLink>
                        <MyHashLink to="/blog">Blog</MyHashLink>
                        <MyHashLink to="/#donate">Donate</MyHashLink>

                        <Dropdown >
                            <Dropdown.Toggle>Find Me</Dropdown.Toggle>
                            <Dropdown.Menu style={{backgroundColor:"black"}} >
                                {Object.entries(socials).map(([name,url],index) => (
                                    <Dropdown.Item key={index} as={NavLink} href={url} style={{backgroundColor:"black",width:"100%",height:"100%",borderRadius:0}} >
                                            {name}
                                    </Dropdown.Item>
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)}