import StatIndicator from "./components/StatIndicator/StatIndicator";

function App() {
  return (
    <div className="wrapper">
      <div className="flex">
        <StatIndicator percValue={5} isIncreasing={true} />
        <StatIndicator percValue={10} isIncreasing={false} />
      </div>
    </div>
  );
}

export default App;
