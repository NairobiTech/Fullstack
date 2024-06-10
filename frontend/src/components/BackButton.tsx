import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";

const BackButton = () => {
  const isSmallDevice = useMediaQuery("(max-width:600px)");

  if (isSmallDevice) return null;

  return (
    <Box sx={{ display: "flex", padding: "10px" }}>
      <Tooltip
        title="This Link is for demo purposes, it does not lead to a page."
        placement="bottom"
      >
        <Button startIcon={<ArrowBackIcon />}>Back to reading sets</Button>
      </Tooltip>
    </Box>
  );
};

export default BackButton;
