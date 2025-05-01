

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CreateCharacter from "./pages/CreateCharacter";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/characters/create" element={<CreateCharacter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

  );
}

export default App;
