import CategorySlider from "@/components/homes/CategorySlider";
import LatestWinner from "@/components/winners/LatestWinner";
import WinnerHero from "@/components/winners/WinnerHero";
import WinnersArchiveList from "@/components/winners/WinnersArchive";
import WinnersArchive from "@/components/winners/WinnersArchive";
import { Helmet } from "react-helmet-async";

const Winner = () => {
  return (
    <>
      <Helmet>
        <title>Winner | MyApp</title>
      </Helmet>

      <WinnerHero />
      <LatestWinner />
      <CategorySlider />
      <WinnersArchiveList />
    </>
  );
};

export default Winner;
