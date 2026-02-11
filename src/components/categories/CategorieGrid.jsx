import CategorieCard from "./CategorieCard";
import { useGetCategories } from "../../hooks/categories.hook";

const CategorieGrid = () => {
  const { data: categoriesData, isLoading } = useGetCategories();

  const photos = categoriesData?.data || [];

  if (isLoading) {
    return (
      <div className="w-full py-20 bg-background">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-500">Loading categories...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <CategorieCard
              key={photo.id}
              image={photo.image}
              photographer={photo.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorieGrid;
