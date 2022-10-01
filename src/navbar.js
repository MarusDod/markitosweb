import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Perfil from './assets/perfil.png'
import {Container, Dropdown, DropdownButton, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import MyHashLink from './MyHashLink'
import { useEffect, useState } from 'react';

export default () => {
    const [activeTab,setActiveTab] = useState("")

    useEffect(() => {
        const handler = () => {
            const hash = window.location.hash.substring(1)
            setActiveTab(hash)
        }

        window.addEventListener('hashchange',handler)

        return () => window.removeEventListener('hashchange',handler)
    },[])

    return (
        <Navbar fixed="top" variant="dark" expand="md" style={{backgroundColor: "rgba(33, 36, 181, 0.3)",width:"100%",fontSize:"1.2em"}}>
            <Container fluid>
                <MyHashLink to="/" style={{display:"flex",gap:"10px",margin:0,padding:0,alignItems:"center"}} >
                    <img
                        src={Perfil}
                        width="40px"
                        className="d-inline-block align-top"
                        alt="eu haha"
                        style={{borderRadius:"20px",objectFit:"contain"}}
                    /> 
                    <div style={{whiteSpace:"nowrap"}}>
                        Marcos Domingues
                    </div>
                </MyHashLink>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Nav navbarScroll variant="pills">
                        <MyHashLink activeTab={activeTab} to="/#about">About</MyHashLink>
                        <MyHashLink activeTab={activeTab} to="/#interests">Interests</MyHashLink>
                        <MyHashLink activeTab={activeTab} to="/#projects">Projects</MyHashLink>
                        <MyHashLink to="/blog">Blog</MyHashLink>
                        <MyHashLink activeTab={activeTab} to="/#donate">Donate</MyHashLink>
                        <MyHashLink activeTab={activeTab} to="/#findme" style={{backgroundColor:"blue"}}>Find me</MyHashLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
)}
