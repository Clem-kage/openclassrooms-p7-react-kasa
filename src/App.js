import "./style/app.css";
import Nav from "./components/elements/nav";
import AppRoutes from "./route/index";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <AppRoutes />
    </div>
  );
}

export default App;
