import { ReactLocation, Router, Outlet } from "react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import { Header } from "./components/Header";
import { routes } from "./config/routes";
import { CartProvider } from "./contexts/Cart";

const location = new ReactLocation();
const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router routes={routes} location={location}>
        <CartProvider>
          <Header />
          <div className="container mx-auto p-6 pb-20">
            <Outlet />
          </div>
        </CartProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
