import Hero from "./components/Hero";

import { ThemeProvider } from "./components/theme-provider";
import { FloatingNav } from "./components/ui/floating-navbar";
import Grid from "./components/Grid";
import RecentProjects from "./components/Projects";
import { navItems } from "./data";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={navItems}
          />
          <Hero />
          <Grid />
          <RecentProjects />
          <Testimonials />
          <Experience />
          <Process />
          <Footer />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
