import CenteredBlock from "../CenteredBlock"
import MyFooter from "../MyFooter"
import Navbar from "../navbar"
import Page from "../Page"

export default ({children}) => (
    <Page>
            <Navbar />
            <CenteredBlock style={{height:"80vh",overflow:"scroll"}}>
                {children}
            </CenteredBlock>
            <MyFooter />
    </Page>
)