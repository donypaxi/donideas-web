import { NavBar } from "../components/NavBar";

export const LayoutPrincipal = ({ children }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      <main>
        {children}
      </main>
    </div>
  );
};