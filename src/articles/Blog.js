import CenteredBlock from "../CenteredBlock";
import MyNavbar from "../navbar";
import TestImage from "../assets/nixos.webp";
import Header from "../Header";
import MoneroImage from "../assets/monero-xmr-logo.png";
import Page from "../Page.js";
import MyFooter from "../MyFooter";
import { Link } from "react-router-dom";
import BlogCSS from "./Blog.module.css";
import { useWindowSize } from "@react-hook/window-size";

const threads = [
  {
    title: "Nixos",
    description: "My favourite OS, and the one that I use and recommend, is",
    image: TestImage,
    url: "nixos",
  },
  {
    title: "My opinion on crypto",
    description: "I do believe that if we want to prevent some dystopic future",
    image: MoneroImage,
    url: "monero",
  },
];

const ThreadContainer = (props) => {
  const thread = props.data;

  return (
    <div className={BlogCSS.threadContainer}>
      <img
        src={thread.image}
        alt={thread.title}
        className={BlogCSS.threadLogo}
      />
      <div className={BlogCSS.threadTitle}>
        <Link
          to={"/blog/" + thread.url}
          style={{
            textDecoration: "none",
            color: "white",
            fontSize: "2em",
          }}
        >
          {thread.title}
        </Link>
      </div>
      <div className={BlogCSS.threadDescription}>{thread.description}</div>
    </div>
  );
};

export default function Blog() {
  const [width, height] = useWindowSize();

  return (
    <Page>
      <MyNavbar />
      <CenteredBlock
        style={{
          height: "80vh",
          ...(width > 750 ? { width: "50%" } : {}),
        }}
      >
        <Header>Articles</Header>
        <div className={BlogCSS.threadList}>
          {threads.map((t, index) => (
            <ThreadContainer key={index} data={t} />
          ))}
        </div>
      </CenteredBlock>
      <MyFooter />
    </Page>
  );
}
