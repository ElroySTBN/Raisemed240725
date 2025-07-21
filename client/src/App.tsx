import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import OffersPage from "@/pages/offers";
import CaseStudiesPage from "@/pages/case-studies";
import CaseStudyDetail from "@/pages/case-study-detail";
import BlogPage from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/offres" component={OffersPage} />
      <Route path="/cas-clients" component={CaseStudiesPage} />
      <Route path="/cas-clients/:id" component={CaseStudyDetail} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:id" component={BlogPost} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
