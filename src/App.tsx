import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "./components/layout/PublicLayout";
import HomePage from "./pages/HomePage";
import SolutionsPage from "./pages/SolutionsPage";
import CataloguePage from "./pages/CataloguePage";
import CatalogueItemPage from "./pages/CatalogueItemPage";
import ProjectsPage from "./pages/ProjectsPage";
import MediaPage from "./pages/MediaPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import AdminGate from "./admin/components/AdminGate";
import AdminLayout from "./admin/components/AdminLayout";
import AdminDashboardPage from "./admin/pages/AdminDashboardPage";
import AdminEnquiriesPage from "./admin/pages/AdminEnquiriesPage";
import AdminSettingsPage from "./admin/pages/AdminSettingsPage";
import AdminEnquiryDetailPage from "./admin/pages/AdminEnquiryDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/solutions/:slug" element={<SolutionsPage />} />
            <Route path="/catalogue" element={<CataloguePage />} />
            <Route path="/catalogue/:slug" element={<CatalogueItemPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/media/:slug" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Admin (demo) */}
          <Route path="/admin" element={<AdminGate />}>
            <Route element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="enquiries" element={<AdminEnquiriesPage />} />
              <Route path="enquiries/:id" element={<AdminEnquiryDetailPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
