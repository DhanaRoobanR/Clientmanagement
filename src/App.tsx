import { Button } from "@mui/material";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          Hello React + TypeScript!
        </h1>

        <Button
          variant="contained"
          color="primary"
          className="py-2 px-4 text-lg"
        >
          Click Me
        </Button>
      </div>
    </div>
  );
}

export default App;
