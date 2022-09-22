import Header from "../Header"
import Paragraph from "../Paragraph"
import Article from "./Article"
import PepeMonero from '../assets/moneropepee.jpeg'

export default () => {

    return (
        <Article>
            <Header>
                Monero
            </Header>
            <Paragraph>
                I do believe that if we want to prevent some dystopic future
                where no one owns anything, and everyone eats ze bugs, fully private transactions 
                are the way to go.
            </Paragraph>
            <Paragraph>
                Most cryptobros have not yet figured that out and either trust their banks or think
                that they're somehow fighting against them by putting their life-savings in BTC 
                and other shitcoins, which couldn't
                be further from the truth since those leave all your transactions naked to the public, 
                and can easily be traced by the IRS by using <a href="https://www.chainalysis.com/">ChainAnalysis</a>. 
            </Paragraph>
            <img
                src={PepeMonero}
                alt="pepe monero"
                width="30%"
                style={{margin:"20px 0 10px 0"}}
            />
            <p style={{fontFamily:"calibri",fontStyle:"italic"}}>
                based pepe
            </p>
        </Article>
    )
}