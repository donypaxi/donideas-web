import { Hero } from "../components/Hero";
import { LayoutPrincipal } from "../layouts/LayoutPrincipal";

export const HomePage = () => {
  return (
    <LayoutPrincipal>
      <Hero />
    </LayoutPrincipal>
  );
};