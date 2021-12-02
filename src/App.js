import { ReactLocation, Router, Outlet } from "react-location";
import { QueryClient, QueryClientProvider } from "react-query";
import { Wrapper } from "components/Wrapper";
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
          <Wrapper>
            <Outlet />
          </Wrapper>
        </CartProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
