import CategorySlider from "@/components/homes/CategorySlider";
import LatestWinner from "@/components/winners/LatestWinner";
import WinnerArchiveHero from "@/components/winners/WinnerArchiveHero";
import { Helmet } from "react-helmet-async";

const WinnerArchive = () => {
    return (
       <>
       <Helmet>
        <title>Winner Archive | MyApp</title>
      </Helmet>

      <div>
        <WinnerArchiveHero/>
        <LatestWinner />
      <CategorySlider />

      </div>
       
       
       
       
       </>
    );
};

export default WinnerArchive;
