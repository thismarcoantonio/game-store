import { useEffect } from "react";
import { useLocation } from "react-location";
import { dataLayer } from "utils/analytics";

export function Wrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    dataLayer.push({ event: "pageview" });
  }, [location.current.pathname]);

  return (
    <div className="container mx-auto p-6 pb-20">
      {children}
    </div>
  );
}
