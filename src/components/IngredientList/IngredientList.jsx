// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
  return (
    <div>
      <ul>
        {props.availableIngredients.map((ingredient, index) => (
          <li
            key={index}
            style={{ backgroundColor: ingredient.color }}
          >
            {ingredient.name}
            <button onClick={() => props.addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;