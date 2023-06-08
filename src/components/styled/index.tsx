import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const BaseStyledButton = styled(Button)({
  textTransform: "capitalize",
  fontWeight: 400,
  color: "inherit",
  borderRadius: "25px",
  transition: "all .35s",
  minWidth: "140px",
});

export const PrimaryStyledButton = styled(BaseStyledButton)({
  color: "white",
  borderColor: "white",
  "&:hover": {
    backgroundColor: "black",
    borderColor: "black",
  },
});

export const SecondaryStyledButton = styled(BaseStyledButton)({
  color: "black",
  borderColor: "black",
  "&:hover": {
    backgroundColor: "black",
    borderColor: "black",
    color: "white",
  },
});
