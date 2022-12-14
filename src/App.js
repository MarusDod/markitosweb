import { HashRouter, BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Homepage'
import Image from './assets/background.jpg'
import Blog from './articles/Blog.js'
import Monero from './articles/Monero.js'
import Nixos from './articles/Nixos';
import { useWindowHeight } from '@react-hook/window-size';


const style = {
  backgroundImage: `url(${Image})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  backgroundPosition: "center",
  backgroundAttachment: 'fixed',
}

const App = () => {
  const height = useWindowHeight()

  return (
      <div style={{...style,minHeight: height}}>
	<HashRouter basename="/"/*{process.env.PUBLIC_URL}*/>
	  <Routes>
	    <Route path="/" element={<Homepage />} />
	    <Route path="/blog" element={<Blog />} />
	    <Route path="/blog/monero" element={<Monero />} />
	    <Route path="/blog/nixos" element={<Nixos />} />
	  </Routes>
	</HashRouter>
      </div>
)}

export default App;
