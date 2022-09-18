import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage'
import Image from './assets/background.jpg'

const style = {
  backgroundImage: `url(${Image})`
}

const App = () => (
  <div style={style}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Homepage />} />
        <Route path="/interests" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
