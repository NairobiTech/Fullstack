import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { SnackBarOptions } from "../types";

const SnackBar = ({
  options,
  setOptions,
}: {
  options: SnackBarOptions;
  setOptions: (options: SnackBarOptions) => void;
}) => {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOptions({ ...options, open: false });
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={options.open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={options.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {options.message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
