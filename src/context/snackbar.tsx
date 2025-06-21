import { createContext, useContext, useState, type ReactNode } from "react";
import { Snackbar } from "../components";

type SnackbarContextType = {
  showSnackbar: (message: string, type?: "Success" | "Error") => void;
};

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const SnackbarProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"Success" | "Error">("Success");

  const showSnackbar = (msg: string, t: "Success" | "Error" = "Success") => {
    setMessage(msg);
    setType(t);
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      {visible && (
        <Snackbar message={message} type={type} onClose={() => setVisible(false)} />
      )}
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) throw new Error("useSnackbar must be used within SnackbarProvider");
  return context;
};
