import CategorySlider from "@/components/homes/CategorySlider";
import LatestWinner from "@/components/winners/LatestWinner";
import WinnerArchiveHero from "@/components/winners/WinnerArchiveHero";
import WinnerFilter from "@/components/winners/WinnerFilter";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const WinnerArchive = () => {
    const [filters, setFilters] = useState({
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      category: "all",
    });

    const handleFilterChange = (newFilters) => {
      setFilters(newFilters);
      console.log("Applied filters:", newFilters);
      // You can use these filters to fetch filtered winners data
    };

    return (
       <>
       <Helmet>
        <title>Winner Archive | MyApp</title>
      </Helmet>

      <div>
        <WinnerArchiveHero/>
        <div className="container mx-auto px-4 py-12">
          <WinnerFilter onFilterChange={handleFilterChange} />
        </div>
        <LatestWinner filters={filters} />
        <CategorySlider />
      </div>
       </>
    );
};

export default WinnerArchive;
