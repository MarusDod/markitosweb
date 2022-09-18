import Nav from 'react-bootstrap/Nav'
import NavLink from 'react-bootstrap/NavLink'
import Perfil from './assets/perfil.png'
import { HashLink } from 'react-router-hash-link';
import { Dropdown, NavDropdown } from 'react-bootstrap';

const navlinkStyle = {
    height:'100%',
    display:"flex",
    alignItems:"center",
    backgroundColor:"rgba(33, 36, 181, 0.3)",
}

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
    <div style={{position: "fixed",width:"100%"}}>
        <Nav variant="pills">
            <Nav.Item>
                <img src={Perfil} alt="eu haha" style={{...navlinkStyle,borderRadius:40,height:"auto",width:"40px" }} />
            </Nav.Item>
            <Nav.Item>
                <h3 style={{...navlinkStyle,paddingLeft: 10}}>
                    Marcos Domingues
                </h3>
            </Nav.Item>
            <Nav.Item style={{flex: 'auto'}} />
            <Nav.Item>
                <NavLink href={"#bruv"} style={navlinkStyle} >
                    Home
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink href={"#interests"} style={navlinkStyle} >
                    Interests
                </NavLink>
            </Nav.Item>
            <Nav.Item>
                <NavLink href={"#projects"}  style={navlinkStyle}>
                Projects 
                </NavLink>
            </Nav.Item>
            <Dropdown style={{backgroundColor:'blue'}}>
                <Dropdown.Toggle style={navlinkStyle}>Find Me</Dropdown.Toggle>
                <Dropdown.Menu style={{backgroundColor:"black"}}>
                {Object.entries(socials).map(([name,url],index) => (
                    <Dropdown.Item key={index} as={NavLink} href={url}>
                            {name}
                    </Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>
        </Nav>
    </div>
)}