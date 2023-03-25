import CatButton from "./CatButton.js";
const { CATEGORIES } = require("./Data.js");

function CategoryFilter({ currentCategory, setCurrentCategory }) {
  const categories = CATEGORIES;
  return (
    <aside>
      <ul>
        <li className="category">
          <button
            key="all"
            className="btn btn-all-categories"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <CatButton
            key={category.name}
            CategoryObj={category}
            setCurrentCategory={setCurrentCategory}
          />
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
