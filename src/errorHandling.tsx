import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

type ErrorHandlingContextType = {
  error?: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
};

const ErrorHandlingContext = createContext<ErrorHandlingContextType | undefined>(undefined);

export const ErrorHandlingProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [error, setError] = useState<string | null>(null);
  const [isToastOpen, setIsToastOpen] = useState(false);

  useEffect(() => {
    setIsToastOpen(false);
  }, []);

  useEffect(() => {
    error && setIsToastOpen(true);
  }, [error]);

  return (
    <>
      {isToastOpen && (
        <Snackbar open={isToastOpen} autoHideDuration={6000} onClose={() => setIsToastOpen(false)}>
          <Alert onClose={() => setIsToastOpen(false)} severity="error" variant="filled" sx={{ width: "100%" }}>
            {error ?? "Unexpected error happened"}
          </Alert>
        </Snackbar>
      )}
      <ErrorHandlingContext.Provider value={{ error: error, setError: setError }}>
        {children}
      </ErrorHandlingContext.Provider>
    </>
  );
};

export const useErrorHandling = (): ErrorHandlingContextType => {
  const context = useContext(ErrorHandlingContext);
  if (context === undefined) {
    throw new Error("useErrorHandling must be used within a ErrorHandlingProvider");
  }
  return context;
};
