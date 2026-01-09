import CategorieCard from "./CategorieCard";

const photos = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "John Smith",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Jane Doe",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Alex Brown",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Sarah Wilson",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Mike Jones",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3310695/pexels-photo-3310695.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Emily White",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "David Clark",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/3775131/pexels-photo-3775131.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Lisa Green",
  },
   {
    id: 9,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "John Smith",
  },
  {
    id: 10,
    image: "https://images.pexels.com/photos/2535859/pexels-photo-2535859.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Jane Doe",
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Alex Brown",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800",
    photographer: "Sarah Wilson",
  },
];

const CategorieGrid = () => {
  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <CategorieCard
              key={photo.id}
              image={photo.image}
              photographer={photo.photographer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorieGrid;