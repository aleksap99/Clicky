import "./app.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from "./pages/Game";
import InventoryPage from "./features/inventory/components/InventoryPage";
import CookingPage from "./pages/skills/CookingPage";
import CombatPage from "./features/combat/CombatPage";
import GatheringPage from "./features/gathering/GatheringPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>ovo je /</div>} />
        <Route path="/about" element={<div>ovo je about</div>} />
        <Route path="/game" element={<Game />}>
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="woodcutting" element={<GatheringPage skill="Woodcutting" />} />
          <Route path="cooking" element={<CookingPage />} />
          <Route path="combat" element={<CombatPage />} />
        </Route>
      </Routes>
    </Router>
  );
}



export default App;
