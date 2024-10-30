import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhiteNoise from "./pages/WhiteNoise";
import NotFound from "./pages/NotFound";
import PinkNoise from "./pages/PinkNoise";
import Settings from "./pages/Settings";
import BrownNoise from "./pages/BrownNoise";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import PodcastsView from "./pages/PodcastsView";
import Podcasts from "./pages/Podcasts";
import Embed from "./pages/Embed";

function App() {
  return (
    <div className="grid grid-rows-[60px_calc(100vh-60px)] grid-flow-col">
      {window.location.pathname != "/embed" ? (
        <header className="flex justify-between items-center p-4 px-6 h-[60px]">
          <div className="left">
            <a href="/">Noisefill</a>
          </div>
          <div className="right flex gap-4">
            <a href="/white-noise">White Noise</a>
            <a href="/podcasts">Podcasts</a>
            <a href="/settings">Settings</a>
          </div>
        </header>
      ) : (
        <></>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/embed" element={<Embed />} />
          <Route path="/white-noise" element={<WhiteNoise />} />
          <Route path="/pink-noise" element={<PinkNoise />} />
          <Route path="/brown-noise" element={<BrownNoise />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/podcasts" element={<Podcasts />} />
          <Route path="/podcasts/view" element={<PodcastsView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
