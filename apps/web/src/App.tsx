import { createBrowserRouter } from 'react-router-dom';
import { AppInterface, routes } from "@ns/interface";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <AppInterface router={router} />
    </div>
  );
}

export default App;
