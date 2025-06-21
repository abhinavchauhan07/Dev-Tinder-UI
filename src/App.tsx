import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
import { RouterProvider } from "./routes";
import { SnackbarProvider } from "./context/snackbar";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <SnackbarProvider>
          <RouterProvider />
        </SnackbarProvider>
      </Provider>
    </>
  );
}

export default App;
