import Card from "./components/Card";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-yellow-300">
      <Card
        type="Learning"
        date="Published 21 Dec 2023"
        title="HTML & CSS foundations"
        description="These languages are the backbone of very website, defining structure, content and presentation."
        author="Greg Hooper"
      />
    </div>
  );
}

export default App;
