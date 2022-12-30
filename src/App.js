import Main from "./components/Main";
import Navbar from "./components/Navbar";
import data from "./data";
function App() {
  const location = data.map((item) => <Main {...item} />);
  return (
    <div className="App">
      <Navbar />
      {location}
    </div>
  );
}

export default App;
