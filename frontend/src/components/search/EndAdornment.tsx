import CircularProgress from "@mui/material/CircularProgress";
import CloseIcon from "@mui/icons-material/Close";

const EndAdornment = ({ searchQuery, loading, resetSearchQueries }: {
    searchQuery: string;
    loading: boolean;
    resetSearchQueries: () => void;
}) => {
  if (searchQuery && !loading) {
    return <CloseIcon onClick={resetSearchQueries} sx={{ cursor: "pointer" }} />;
  }

  if (loading) {
    return <CircularProgress size={20} />;
  }

  return null;
};

export default EndAdornment;