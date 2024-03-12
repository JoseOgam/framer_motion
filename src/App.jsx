import "./index.css";
import { accordionData } from "./utils";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h1 className="flex text-3xl font-bold underline">Accordion Demo</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion key={title} title={title} content={content} />
        ))}
      </div>
    </div>
  );
}

export default App;
