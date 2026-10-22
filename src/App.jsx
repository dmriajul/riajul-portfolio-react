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

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801954447017"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-sticky-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.629.776-.114.133-.23.149-.427.05-.197-.099-.832-.307-1.586-.98-.588-.524-.986-1.172-1.102-1.371-.115-.197-.012-.304.087-.403.088-.088.197-.23.296-.346.1-.115.133-.197.197-.329.065-.133.033-.247-.017-.346-.05-.099-.445-1.079-.608-1.47-.16-.382-.325-.331-.445-.337l-.38-.007c-.133 0-.346.05-.528.247-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.17-.478 1.338-.94.166-.462.166-.856.116-.94-.05-.083-.182-.133-.38-.232z" />
        </svg>
      </a>
    </ThemeProvider>
  );
}

export default App;
