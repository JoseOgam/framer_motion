import "./index.css";
import { accordionData } from "./utils";
import Accordion from "./Accordion";
import Frame from "./components/frame";

function App() {
  return (
    <div className=" h-screen items-center justify-center">
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
      <Frame />
    </div>
  );
}

export default App;
