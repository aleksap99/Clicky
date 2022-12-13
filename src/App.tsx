import "./app.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from "./pages/Game";
import InventoryPage from "./features/inventory/components/InventoryPage";
import CookingPage from "./pages/skills/CookingPage";
import CombatPage from "./features/combat/CombatPage";
import GatheringPage from "./features/gathering/GatheringPage";
import { navBasePath } from "./util/utils";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>This is /</div>} />
        <Route path="/about" element={<div>About to be implemented</div>} />
        <Route path={`/${navBasePath}`} element={<Game />}>
          <Route path="inventory" element={<InventoryPage />} />
          <Route path="woodcutting" element={<GatheringPage skill="Woodcutting" />} />
          <Route path="cooking" element={<CookingPage />} />
          <Route path="combat" element={<CombatPage />} />
        </Route>
      </Routes>
      <button>aa</button>
    </Router >
  );
}



export default App;
