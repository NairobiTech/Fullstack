import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";

import Logo from "../logo.svg";

const Header = () => (
  <Box sx={{ display: "flex", padding: "20px", alignItems: "center" }}>
    <Box sx={{ display: "flex", alignItems: "center" }} gap={2}>
      <img src={Logo} alt="logo" width={50} height={50} />
      <Typography variant="h5" fontSize="bold" mt={1}>
        Teachers
      </Typography>
    </Box>

    <Chip
      avatar={<Avatar alt="Natacha" src="/assets/image1.webp" />}
      label="Cetrick"
      variant="outlined"
      sx={{ marginLeft: "auto" }}
    />
  </Box>
);

export default Header;
