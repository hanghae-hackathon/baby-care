import { RouterProvider } from "react-router-dom";
import router from "router";
import GlobalStyles from "theme/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
