import { ReactLocation, Router, Outlet } from "react-location";
import { Header } from "./components/Header";
import { routes } from "./config/routes";

const location = new ReactLocation();

function App() {
  return (
    <Router
      routes={routes}
      location={location}
    >
      <Header />
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </Router>
  );
}

export default App;
