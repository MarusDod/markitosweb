import { ListGroup, Row, Col, Tab } from 'react-bootstrap';
import PathScreenshot from './assets/Screenshot from 2022-09-13 16-13-31.png'
import Bobo from './assets/bobo.png'
import Flappy from './assets/flappy.png'
import Header from './Header';
import Paragraph from './Paragraph.js';

const Choice = ({style,text}) => (
    <div style={{...style,fontSize:25}}>
        {text}
    </div>
)

export default () => (
    <>
        <Header>
            My Personal Projects
        </Header>
        <Paragraph center style={{marginBottom: "2em"}}>
            Here are some of the pet projects I've worked on in my freetime. Feel free to check 
            my <a href="https://github.com/MarusDod">Github</a>.
        </Paragraph>

        <Tab.Container defaultActiveKey={"pathfinding"} >
            <Row style={{width:"100%"}}>
                <Col sm={4} className="mb-3">
                    <ListGroup >
                        <ListGroup.Item action eventKey="pathfinding">
                            <Choice text={"PathFinding"} />
                        </ListGroup.Item>
                        <ListGroup.Item action eventKey="tinyscheme">
                            <Choice text={"TinyScheme"} />
                        </ListGroup.Item>
                        <ListGroup.Item action eventKey="discordbot">
                            <Choice text={"Discord Bot"} />
                        </ListGroup.Item>
                        <ListGroup.Item action eventKey="brainfuck">
                            <Choice text={"Brainfuck"} />
                        </ListGroup.Item>
                        <ListGroup.Item action eventKey="flappybird">
                            <Choice text={"Flappy Bird"} />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8} style={{backgroundColor:"rgba(39, 109, 179, 0.1)",borderRadius:"1em"}}>
                    <Tab.Content >
                        <Tab.Pane eventKey="pathfinding">
                            <Paragraph center>
                                I did a visual demo of the A* algorithm.
                                <br />
                                <a style={{wordWrap: "break-word"}} href="https://marusdod.github.io/pathfinding/" >
                                https://marusdod.github.io/pathfinding/
                                </a>
                            </Paragraph>
                            <img 
                                src={PathScreenshot} 
                                alt="pathfinding example" 
                                height={"90%"} 
                                width={"90%"} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="tinyscheme">
                            <Paragraph center>
                            <a href='https://github.com/MarusDod/TinyScheme'>
                                I wrote a Scheme interpreter in Haskell
                            </a>
                            </Paragraph>
                        </Tab.Pane>
                        <Tab.Pane eventKey="discordbot">
                                <Paragraph center>
                                I made <a href="https://github.com/MarusDod/discordbot">discord bot</a> for my own server
                                capable of fetching youtube playlists and songs and playing them in voice chat. It can also
                                tell you any cryptocurrency's current price CoinMarketCap, set daily reminders until a certain
                                deadline, answer questions, etc...
                                </Paragraph>
                                <img
                                    src={PathScreenshot}
                                    alt="bobo the bear bot"
                                    height={"90%"} 
                                    width={"90%"}
                                    />

                        </Tab.Pane>
                        <Tab.Pane eventKey="brainfuck">
                            <Paragraph center>
                            <a href='https://github.com/MarusDod/brainfuck'>
                                I wrote an interpreter for the Brainfuck language in 100 lines of C
                            </a>
                            </Paragraph>
                        </Tab.Pane>
                        <Tab.Pane eventKey="flappybird">
                            <Paragraph center>
                            <a href="https://github.com/MarusDod/Flappy_Bird_2020_04_25_20_36_33">
                                shitty Flappy Bird clone :{')'}
                            </a>
                            </Paragraph >
                            <img
                                style={{marginLeft:"auto",marginRight:"auto"}}
                                alt="flappy bird"
                                src={Flappy}
                                height={"90%"} 
                                width={"90%"}
                            >
                            </img>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </>
)