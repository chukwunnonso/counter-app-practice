import Card from "./components/Card";

function App() {

    const handleClick = () => {
      alert('You click me')
    }
  return (
    <main className="container w-full h-screen bg-slate-300 flex justify-center
     items-center">
      <Card
          onClick={handleClick}
      />
    </main>
  );
}

export default App;
