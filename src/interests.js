import Header from "./Header";
import Paragraph from "./Paragraph";
import Nixos from './assets/nixos.webp'
import HaskellLogo from './assets/haskell.png'
import Aoc from './assets/aoc.png'

export default () => (
    <>
        <Header>
            Interests
        </Header>
        <Paragraph center>
            I like to lift heavy weights, code recreationally and browse image boards.
        </Paragraph>
        <Paragraph center>
            I love to use ReactJS on the frontend. This website is powered by it! Very much prefer it over vanilla html/css/js.
        </Paragraph>
        <img
            src={HaskellLogo}
            alt="Haskell"
            width="40%"
        />
        <Paragraph center>
            My favourite programming language is Haskell. It has a very unique syntax and paradigm
            compared to conventional languages, however it comes with a very
            high learning curve.
        </Paragraph>
        <Header>
            Advent Of Code
        </Header>
        <img
            src={Aoc}
            alt="My Advent Of Code Stars"
            width="40%"
        />
        <Paragraph>
            I recently managed to finish all days of Advent of Code 2022! That was definitely a 
            tough one, way more than I expected it to be. This years' seemed have a focus on
            pathfinding exercises. Some days were harder than others and all of them required
            you to think out of the box. Definitely could not 
            have gotten days 17,19 and 22 if weren't for the help of Reddit and some Discord Servers.

            I wrote my solution in typescript which I 
            have posted <a href={"https://github.com/MarusDod/AdventOfCode2022"}>on my github</a>
        </Paragraph>
    </>
)
