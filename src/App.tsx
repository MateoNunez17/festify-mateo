import { RouterProvider } from "react-router-dom";
import { router } from "@/router";

function App() {
  return (
    <div className="bg-orange-100 text-gray-900 min-h-screen">
      <RouterProvider router={router} />  
    </div>
  );
}

export default App;
