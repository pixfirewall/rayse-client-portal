import styled from "@emotion/styled";
import { Button } from "@mui/material";

// The background color of this button doesn't change on hovering over it
export const PlainHoverButton = styled(Button)({
  '&:hover': {
    backgroundColor: '#00000000',
  }
})
