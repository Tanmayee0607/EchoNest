/* Living Systems Editorial: the app shell keeps public navigation calm and consistent while each route shifts the reading rail for its content. */
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/contexts/ThemeContext";
import ErrorBoundary from "@/components/ErrorBoundary";
import { SiteFooter, SiteHeader } from "@/components/EcoShell";
import Home from "@/pages/Home";
import { About, Challenges, Community, Contact, Dashboard, Impact, Living, NotFoundPage, Resources, Vision } from "@/pages/InteriorPages";
import MonthlyAnalysis from "@/pages/MonthlyAnalysis";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [location]);
  return null;
}

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/living" component={Living} />
    <Route path="/impact" component={Impact} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/analyze" component={MonthlyAnalysis} />
    <Route path="/challenges" component={Challenges} />
    <Route path="/resources" component={Resources} />
    <Route path="/community" component={Community} />
    <Route path="/vision" component={Vision} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFoundPage} />
  </Switch>;
}

function AppLayout() {
  return <div className="min-h-screen bg-[#f5f1e9]">
    <ScrollToTop />
    <SiteHeader />
    <main><Router /></main>
    <SiteFooter />
  </div>;
}

export default function App() {
  return <ErrorBoundary>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <AppLayout />
      </TooltipProvider>
    </ThemeProvider>
  </ErrorBoundary>;
}
