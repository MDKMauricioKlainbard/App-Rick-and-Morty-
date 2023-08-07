import characters from "./data";
import './App.css';
import CharacterCard from "./components/CharacterCard";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <Cards cardList = {characters}/>
      <SearchBar/>
    </div>
  );
}

export default App;
