import { Movies } from "@/types/movie.type";

interface CategoryFilterProps {
    categories: Movies[];
    selectedCategories: Movies[];
    setSelectedCategories: (categories: Movies[]) => void;
  }
  
  export function CategoryFilter({ categories, selectedCategories, setSelectedCategories }: CategoryFilterProps) {
    const handleCategoryChange = (category: Movies) => {
      setSelectedCategories(
        selectedCategories.includes(category)
          ? selectedCategories.filter((c) => c !== category)
          : [...selectedCategories, category]
      );
    };
  
    return (
      <div className="flex gap-4 mt-4">
        {categories.map((category) => (
          <label key={category} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            <span className="ml-2">{category}</span>
          </label>
        ))}
      </div>
    );
  }
  