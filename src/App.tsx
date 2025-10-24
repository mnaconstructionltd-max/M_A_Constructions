import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import PrivacyPolicy from "./pages/privacyPolicy";
import CookiePolicy from "./pages/cookies";
import TermsOfService from "./pages/terms";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/pricing";
import EstimationsPage from "./pages/sampleEstimations";
import CsiTrades from "./pages/TradePage"
import SampleProjectsPage from "./pages/projects";

import CSITradeDetail from "./pages/TradeDetailPage"


// import QuantityTakeoff from "./pages/Services/QuantityTakeoffEstimation";
// import ProjectControls from "./pages/Services/ProjectControlsManagement";
// import BIMCoordination from "./pages/Services/BIM3DCoordination";
// import BidManagement from "./pages/Services/BidManagementSupport";
// import ValueEngineering from "./pages/Services/ValueEngineering";
// import RemoteSupport from "./pages/Services/RemoteEstimatingSupport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* <Route path="/quantity-takeoff" element={<QuantityTakeoff />} />
          <Route path="/project-controls" element={<ProjectControls />} />
          <Route path="/bim-3d" element={<BIMCoordination />} />
          <Route path="/bid-management" element={<BidManagement />} />
          <Route path="/value-engineering" element={<ValueEngineering />} />
          <Route path="/remote-support" element={<RemoteSupport />} /> */}


          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/Estimations" element={<EstimationsPage />} />
          <Route path="/projects" element={<SampleProjectsPage />} />

          

            

          <Route path="/csi-trades" element={<CsiTrades />} />
          <Route path="/csi-trades/:divisionId" element={<CSITradeDetail />} />


          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
