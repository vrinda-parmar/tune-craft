import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MusicAcademy from './pages/MusicAcademy';
import CulturalDress from './pages/CulturalDress';
import NotFound from './pages/NotFound';
import OurTeam from './pages/OurTeam';
 import ExploreCourses from './pages/ExploreCourses';
 import ViewCollection from './pages/ViewCollection';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MusicAcademy />} />
          <Route path="/cultural-dress" element={<CulturalDress />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/our-team" element={<OurTeam />} />

         

<Route path="/explore-courses" element={<ExploreCourses />} />

<Route path="/view-collection" element={<ViewCollection />} />


        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;