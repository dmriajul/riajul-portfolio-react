import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail";

// Helper component to manage smooth scrolling on route and hash changes
function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // Delay slightly to ensure DOM has rendered
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollManager />
        <Routes>
          {/* Main Home Page */}
          <Route path="/" element={<Home />} />

          {/* Dedicated Service Routes */}
          <Route path="/services/smm" element={<ServiceDetail />} />
          <Route path="/services/social-media-marketing" element={<ServiceDetail />} />
          <Route path="/services/social-media-manager" element={<ServiceDetail />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />

          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
