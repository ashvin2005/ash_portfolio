import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Layout placeholder</div>}>
        <Route index element={<div>About</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;