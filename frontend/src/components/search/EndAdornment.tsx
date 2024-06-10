import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

import { ISearchEndAdornmentProps } from "../../lib/types";

const EndAdornment = ({
  searchQuery,
  loading,
  resetSearchQueries,
}: ISearchEndAdornmentProps) => {
  if (searchQuery && !loading) {
    return (
      <CloseIcon onClick={resetSearchQueries} sx={{ cursor: "pointer" }} />
    );
  }

  if (loading) {
    return <CircularProgress size={20} />;
  }

  return null;
};

export default EndAdornment;
