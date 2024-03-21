import "./App.css";
import Accordion from "./Components/Accordion";
import RandomColor from "./Components/RandomColor";
import StarRating from "./Components/StarRating";
import ImageSlider from "./Components/ImageSlider";
import LoadMoreData from "./Components/Load-more-data";
function App() {
  return (
    <div className="App">
      {/** <Accordion/> 
      <RandomColor />
      <StarRating />
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        pages={"1"}
        limit={"10"}
      />**/}
      <LoadMoreData />
    </div>
  );
}

export default App;
