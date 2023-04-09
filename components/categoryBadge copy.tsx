import { Category } from "@/types/category";
import { CategoryBadgeProps } from "@/types/category-badge-props";
import { getCategoryName } from "@/utils/get-category-name";

const CategoryBadge = ({ category }: CategoryBadgeProps): JSX.Element => {
  const categoryName = getCategoryName(category);
  const categoryBackgrounds =
    {
      [Category.MEN]: "bg-cyan-400",
      [Category.WOMEN]: "bg-pink-400",
      [Category.ELECTRONICS]: "bg-indigo-400",
      [Category.JEWELERY]: "bg-yellow-400",
    }[category] || "";

  return (
    <small className={`${categoryBackgrounds} absolute primary-badge`}>
      {categoryName}
    </small>
  );
};

export default CategoryBadge;
