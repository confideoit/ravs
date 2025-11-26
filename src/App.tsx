import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollingBanner from "./components/ScrollingBanner";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Planners from "./pages/Planners";
import Constructions from "./pages/Constructions";
import Interiors from "./pages/Interiors";
import LandConsulting from "./pages/LandConsulting";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>

        {/* Scroll to top on route change */}
        <ScrollToTop />

        <ScrollingBanner />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planners" element={<Planners />} />
          <Route path="/constructions" element={<Constructions />} />
          <Route path="/interiors" element={<Interiors />} />
          <Route path="/land-consulting" element={<LandConsulting />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
