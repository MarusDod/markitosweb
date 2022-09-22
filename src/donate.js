import Header from "./Header";
import Paragraph from "./Paragraph";
import QrCode from './assets/xmrqrcode.png'

const address = '831fY6E3SVcCj6D6VjkLuvSjGNScd7tgUR3V6SVEcwj9UV76hb9gE4uVkL7vUqd2qpfyrNnaNB1S2CUTNx7cXBBk2Gz5uiZ'

const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
}

const addressBarStyle = {
    backgroundColor:"grey",
    overflow:"hidden",
    border:"black",
    width: "calc(100%)",
    fontSize: "1.5em",
    textOverflow: "ellipsis",
    margin: "0px 10px 0px 10px",
}

export default () => (
    <>
        <Header>
            Donating
        </Header>
        <Paragraph center>
            I currently only accept Monero (XMR).
            Feel free to send me a tip by either scanning the QR code on your phone
            or by copy pasting this address on your wallet (hope you are not using a custodial one :{')'}).
        </Paragraph>
        <Paragraph center>
            <img style={{width:"1em",}} src="https://cdn.cdnlogo.com/logos/m/88/monero.svg" />
            {''} Address:
        </Paragraph>
        <div style={{display: 'flex',width:"80%",marginBottom:"1em",whiteSpace:"nowrap"}}>
            <input 
                type="text" 
                value={address} 
                style={addressBarStyle}
                disabled
            />
            <button className="btn btn-secondary" onClick={copyToClipboard} title="copy to clipboard">
                <svg xmlns="https://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                </svg>
            </button>
        </div>
        <img 
            src={QrCode}
            alt="donation qr code"
            />
    </>
)