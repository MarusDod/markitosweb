import { ListGroup, Row, Col, Tab } from 'react-bootstrap';
import PathScreenshot from './assets/Screenshot from 2022-09-13 16-13-31.png'
import Bobo from './assets/bobo.png'
import Flappy from './assets/flappy.png'
import Header from './Header';
import Paragraph from './Paragraph.js';

const Choice = ({style,text}) => (
    <div style={{...style,fontSize:20}}>
        {text}
    </div>
)

export default () => (
    <>
        <div style={{marginBottom:"50px"}}>
            <Header>
                My Personal Projects
            </Header>
            <Paragraph>
                Here are some of the pet projects I've worked on in my freetime
            </Paragraph>
        </div>

        <Tab.Container defaultActiveKey={"pathfinding"}>
            <Row>
                <Col sm={4}>
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
                <Col sm={8}>
                    <Tab.Content >
                        <Tab.Pane eventKey="pathfinding">
                            <Paragraph center>
                                I did a visual demo of the A* algorithm.
                                <br />
                                <a href="https://marusdod.github.io/pathfinding/" >
                                https://marusdod.github.io/pathfinding/
                                </a>
                            </Paragraph>
                            <img src={PathScreenshot} alt="pathfinding example" height={500} width={500}></img>
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
                                    src={Bobo}
                                    alt="bobo the bear bot"
                                    height={200}
                                    ></img>

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
                                height={500}
                            >
                            </img>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    </>
)