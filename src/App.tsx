import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";

import { ThemeProvider } from "./components/theme-provider";
import { FloatingNav } from "./components/ui/floating-navbar";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={[
              { name: "Home", link: "#home", icon: <FaHome /> },
              { name: "About", link: "#about",  },
              { name: "Projects", link: "#projects" },
              { name: "Contact", link: "#contact" },
            ]}
          />
          <Hero />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
