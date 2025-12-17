import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Alerts from "./pages/Alerts";
import Scheduling from "./pages/Scheduling";
import Manufacturing from "./pages/Manufacturing";
import Security from "./pages/Security";
import CustomerEngagement from "./pages/CustomerEngagement";
import AIOrchestration from "./pages/AIOrchestration";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/scheduling" element={<Scheduling />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/security" element={<Security />} />
            <Route path="/customer" element={<CustomerEngagement />} />
            <Route path="/orchestration" element={<AIOrchestration />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
