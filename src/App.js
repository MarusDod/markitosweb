import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'
import Image from './assets/background.jpg'
import Blog from './articles/Blog.js'
import Monero from './articles/Monero.js'
import Nixos from './articles/Nixos';

const style = {
  backgroundImage: `url(${Image})`,
  backgroundRepeat:"repeat",
  backgroundSize:"contain",
  height:"100%",
}

const App = () => (
  <div style={style}>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/monero" element={<Monero />} />
        <Route path="/blog/nixos" element={<Nixos />} />
      </Routes>
    </HashRouter>
  </div>
)

export default App;
