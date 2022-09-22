import Header from "../Header"
import Paragraph from "../Paragraph"
import Article from "./Article"
import NixosLogo from '../assets/nixos.webp'

export default () => {

    return (
        <Article>
            <Header>
                Nixos
            </Header>
            <Paragraph>
                My favourite OS, and the one that I use and recommend, is {''}
                <a href="https://nixos.org/">NixOS</a>, a GNU/Linux distribution. 
            </Paragraph>
            <Paragraph>
                You can install almost any software you want on it without
                running into dependency conflicts. The way it accomplishes this
                is by doing away with the filesystem hierarchy and storing every artifact,
                called <i>derivations</i>, under the hash of its contents in <i>/nix/store/</i>.
            </Paragraph>
            <Paragraph>
                Derivations are described using a lazily-evaluated functional programming language
                called <i>nix</i>. It's basically JSON with functions, and really isn't that different from docker.yaml files or ansible
                if you only need to accomplish simple tasks, however the functional aspect of it makes it more
                manageable to import other people's code and extend their functionality in a way that doesn't break.
            </Paragraph>
            <Paragraph>
                Initially Nix was just a package manager that you could install on just any distro. However
                the devs got really ambitious and decided to build a fully fledged OS based on Nix.
                The way it beautifully integrates with Systemd, makes it possible to orchestrate your entire OS
                via a single <i>configuration.nix</i> file!
            </Paragraph>
            <Paragraph>
                If you have a terminal illness of distro-hopping, this distro will cure it full send fr fr.
            </Paragraph>
            <img
                src={NixosLogo}
                alt="nixos logo"
                width="30%"
                style={{marginTop:"20px"}}
            />
        </Article>
    )
}