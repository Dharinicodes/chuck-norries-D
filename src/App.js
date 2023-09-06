import "./styles.css";
import JokeCategories from "./components/JokeCategories";
// import Shimmer from "./components/Shimmer";

export default function App() {
  return (
    <div className="App">
      <h1 className="title">Chuck Norries</h1>
      <JokeCategories />
    </div>
  );
}
