import { LayoutPrincipal } from "../layouts/LayoutPrincipal";
import { CuentaRegresiva } from "../components/CuentaRegresiva";
import { HeroSlider } from "../components/HeroSlider";
import { Comunicados } from "../components/Comunicados";
import { Empadronados } from "../components/Empadronados";
import { Delegados } from "../components/Delegados";
import { FechasImportantes } from "../components/FechasImportantes";

export const HomePage = () => {
  return (
    <LayoutPrincipal>
      <HeroSlider />
      <CuentaRegresiva />
      <Comunicados />
      <Empadronados />
      <Delegados />
      <FechasImportantes />
    </LayoutPrincipal>
  );
};