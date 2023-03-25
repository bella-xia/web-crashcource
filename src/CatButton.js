function CatButton({ CategoryObj, setCurrentCategory }) {
  const { name, color } = CategoryObj;
  return (
    <li className="category">
      <button
        className="btn btn-category"
        style={{ backgroundColor: color }}
        onClick={() => setCurrentCategory(name)}
      >
        {name}
      </button>
    </li>
  );
}

export default CatButton;
