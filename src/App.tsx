import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";

export default function App() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const on = () => { setHash(window.location.hash); window.scrollTo({ top: 0 }); };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash === "#/privacidade" ? <Privacy /> : <Home />;
}
