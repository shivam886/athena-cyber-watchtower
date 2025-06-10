
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ExecutiveSummary from "./pages/ExecutiveSummary";
import RiskProfile from "./pages/RiskProfile";
import Vulnerabilities from "./pages/Vulnerabilities";
import Remediation from "./pages/Remediation";
import RiskWaivers from "./pages/RiskWaivers";
import Domains from "./pages/Domains";
import IPAddresses from "./pages/IPAddresses";
import DetectedProducts from "./pages/DetectedProducts";
import IdentityBreaches from "./pages/IdentityBreaches";
import Typosquatting from "./pages/Typosquatting";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { AppSidebar } from "./components/AppSidebar";
import AIChatbot from "./components/AIChatbot";
import ThemeToggle from "./components/ThemeToggle";
import { useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Login onLogin={() => setIsLoggedIn(true)} />
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SidebarProvider>
              <div className="min-h-screen flex w-full gradient-bg">
                <AppSidebar />
                <main className="flex-1 overflow-hidden relative">
                  {/* Theme Toggle Button */}
                  <div className="absolute top-4 right-4 z-50">
                    <ThemeToggle />
                  </div>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/executive-summary" element={<ExecutiveSummary />} />
                    <Route path="/risk-profile" element={<RiskProfile />} />
                    <Route path="/vulnerabilities" element={<Vulnerabilities />} />
                    <Route path="/remediation" element={<Remediation />} />
                    <Route path="/risk-waivers" element={<RiskWaivers />} />
                    <Route path="/domains" element={<Domains />} />
                    <Route path="/ip-addresses" element={<IPAddresses />} />
                    <Route path="/detected-products" element={<DetectedProducts />} />
                    <Route path="/identity-breaches" element={<IdentityBreaches />} />
                    <Route path="/typosquatting" element={<Typosquatting />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <AIChatbot />
              </div>
            </SidebarProvider>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
