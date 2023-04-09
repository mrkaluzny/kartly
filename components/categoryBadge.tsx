import { Category } from "@/types/category";
import { CategoryBadgeProps } from "@/types/category-badge-props";
import { getCategoryName } from "@/utils/get-category-name";

const CategoryBadge = ({ category }: CategoryBadgeProps): JSX.Element => {
  const categoryName = getCategoryName(category);
  const categoryBackgrounds =
    {
      [Category.MEN]: "text-cyan-300",
      [Category.WOMEN]: "text-pink-300",
      [Category.ELECTRONICS]: "text-slate-300",
      [Category.JEWELERY]: "text-yellow-300",
    }[category] || "";

  return (
    <small className={`${categoryBackgrounds} absolute primary-badge`}>
      {categoryName}
    </small>
  );
};

export default CategoryBadge;
