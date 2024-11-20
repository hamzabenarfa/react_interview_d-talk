"use client";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "@/components/ui/multi-select";

import { Movies } from "@/types/movie.type";
import { useState, useEffect } from "react";

interface CategoryFilterProps {
  categories: Movies[];
  selectedCategories: Movies[];
  setSelectedCategories: (categories: Movies[]) => void;
}

export function CategoryFilter({
  categories,
  selectedCategories,
  setSelectedCategories,
}: CategoryFilterProps) {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    setValue(selectedCategories.map((category) => category));
  }, [selectedCategories]);

  const handleCategoryChange = (selectedOptions: string[]) => {
    setValue(selectedOptions);
    const selectedCategoryObjects = categories.filter((category) =>
      selectedOptions.includes(category)
    );
    setSelectedCategories(selectedCategoryObjects);
  };

  return (
    <MultiSelector
      values={value}
      onValuesChange={handleCategoryChange}
      loop
      className="max-w-xl"
    >
      <MultiSelectorTrigger>
        <MultiSelectorInput placeholder="Select Categories" />
      </MultiSelectorTrigger>
      <MultiSelectorContent>
        <MultiSelectorList>
          {categories.map((category) => (
            <MultiSelectorItem key={category} value={category}>
              {category}
            </MultiSelectorItem>
          ))}
        </MultiSelectorList>
      </MultiSelectorContent>
    </MultiSelector>
  );
}
