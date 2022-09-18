import ClipboardIcon from './assets/clipboard.svg'

const mystyle = {
    backgroundColor: "#494356",
    textAlign: "left",
    padding:"10px 0px 0px 20px",
    display:'inline',
    margin: "30px 50px 0px 50px",
    fontSize:"20px",
}

const address = '831fY6E3SVcCj6D6VjkLuvSjGNScd7tgUR3V6SVEcwj9UV76hb9gE4uVkL7vUqd2qpfyrNnaNB1S2CUTNx7cXBBk2Gz5uiZ'

const copyToClipboard = () => {
    navigator.clipboard.writeText(address)
}

export default () => (
    <footer style={mystyle}>
        donate :{')'}
        <br />
        XMR address: {address}
        <button className="btn btn-secondary" style={{margin:"10px"}} onClick={copyToClipboard} title="copy to clipboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clipboard" viewBox="0 0 16 16">
                <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
            </svg>
        </button>
    </footer>
)