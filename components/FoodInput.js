import { useState } from 'react';
import { useMacros } from '../context/MacroContext';

const FoodInput = () => {
  const { addFood } = useMacros();
  const [food, setFood] = useState({ name: '', calories: 0, protein: 0, carbs: 0, fats: 0 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFood({ ...food, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({ ...food, id: Date.now() });
    setFood({ name: '', calories: 0, protein: 0, carbs: 0, fats: 0 });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={food.name}
        onChange={handleChange}
        placeholder="Food Name"
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="calories"
        value={food.calories}
        onChange={handleChange}
        placeholder="Calories"
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="protein"
        value={food.protein}
        onChange={handleChange}
        placeholder="Protein"
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="carbs"
        value={food.carbs}
        onChange={handleChange}
        placeholder="Carbs"
        className="p-2 border rounded"
      />
      <input
        type="number"
        name="fats"
        value={food.fats}
        onChange={handleChange}
        placeholder="Fats"
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Food
      </button>
    </form>
  );
};

export default FoodInput;