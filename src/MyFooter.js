const address = '831fY6E3SVcCj6D6VjkLuvSjGNScd7tgUR3V6SVEcwj9UV76hb9gE4uVkL7vUqd2qpfyrNnaNB1S2CUTNx7cXBBk2Gz5uiZ'

const socials = {
    'youtube-play': "https://www.youtube.com/channel/UC93Ccuez4vzuZpC4TPoB2UA",
    "envelope": "mailto: markitos.2001@hotmail.com",
    'linkedin-square': "https://www.linkedin.com/in/marcos-domingues-366388236/",
    'telegram': "https://telegram.me/MarusDod",
    'github': "https://github.com/MarusDod",
    'instagram': "https://www.instagram.com/marcos_domingues2001",
}

const footerStyle = {
    width:"100%",
    backgroundColor: "#383838",
    marginTop: "5em",
}

const mystyle = {
    textAlign: "left",
    fontSize:"20px",
    margin:"1.5em",
    padding:"1em",
    borderBottom:"2px dashed black",

    display:'flex',
    justifyContent:"center",
    flexFlow:"row wrap",
    gap: "1em",
}

const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
}

const Social = ({href,name}) => (
        <a href={href}>
            <i style={{fontSize:"2em"}} className={`fa fa-${name}`}></i>
        </a>
)

export default () => (
    <footer id={'findme'} style={footerStyle} > 
        <div style={mystyle}>
            {Object.entries(socials).map(([name,href],index) => (
                <Social href={href} name={name} key={index} />
            ))}
        </div>
        {/*<div style={{color:"white",textAlign:"center",margin:".5em",fontSize:"1.5em",fontFamily:"Times New Roman"}}>
            Contact
            </div>*/}
    </footer>
)
