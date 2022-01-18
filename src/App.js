import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Claim from './components/Claim/Claim';
import Artwork from './components/Artwork/Artwork';
import Roadmap from './components/Roadmap/Roadmap';
import Giveaway from './components/Giveaway/Giveaway';
import Faqs from './components/Faqs/Faqs';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Claim />
      <Artwork />
      <Roadmap />
      <Giveaway />
      <Faqs />
    </div>
  );
}

export default App;
