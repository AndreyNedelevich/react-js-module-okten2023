import './App.css';
import FormNewAnimal from "./components/newAnimal/FormNewAnimal";

function App() {


  // Використовуючи хук useReducer в якому початковый стейт буде {cats: [], dogs:[]}
  // Реалізвути збереження окремо нового кота, та окремо собаку (приклад на зображенні)
  //
  // Advance
  // реалізувати видалення для кожного при натисканні на кнопку delete



  return (
    <div >
      <FormNewAnimal/>
    </div>
  );
}

export default App;
