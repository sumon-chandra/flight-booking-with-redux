import DisplayData from "./components/DisplayData";
import InputData from "./components/InputData";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <section>
        <InputData />
        <DisplayData />
      </section>
    </div>
  );
};

export default App;
