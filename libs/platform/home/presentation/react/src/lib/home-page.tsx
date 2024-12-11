import { HomeBanner, HomeFooter, HomeHeader, HomeHero, HomeResponsibility } from "./components";

export const HomePage: React.FC = () => {
  return (
    <div>
      <HomeHeader />
      <HomeHero />
      {/* <HomeModels /> */}
      <HomeResponsibility />
      <HomeBanner />
      <HomeFooter />
    </div>
  );
};