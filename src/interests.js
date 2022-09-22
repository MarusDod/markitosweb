import Header from "./Header";
import Paragraph from "./Paragraph";
import Nixos from './assets/nixos.webp'
import HaskellLogo from './assets/haskell.png'

export default () => (
    <>
        <Header>
            Interests
        </Header>
        <Paragraph center>
            I like to lift heavy weights, code recreationally, browse image boards
            and read the latest chapters of my favourite manga in my freetime.
        </Paragraph>
        <Paragraph center>
            I've been big into privacy projects as of late such as
            <div style={{display:"flex",justifyContent:"center"}}>
                <ul style={{textAlign:"start"}}>
                    <li>
                        Tor
                    </li>
                    <li>
                        Monero
                    </li>
                    <li>
                        Telegram
                    </li>
                </ul>
            </div>
        </Paragraph>
        <Paragraph center>
            I'm learning {''}
            <img
                src={process.env.PUBLIC_URL + "/favicon.ico"}
                width="25px"
                alt="ReactJS"
                title="ReactJS"
                />
            ReactJS as I'm a bit crude on frontend.
            The only reason I didn't build this website with pure html/css
            is because I find it a bit easier to manage the source code by splitting
            it across multiple source files and components.
        </Paragraph>
        <Paragraph center>
            My favourite programming language is Haskell. It has a very unique syntax and paradigm
            compared to conventional languages, with a very
            high learning curve, which is why only the most deranged people learn it (Kidding).
        </Paragraph>
        <img
            src={HaskellLogo}
            alt="Haskell"
            width="40%"
        />
    </>
)
