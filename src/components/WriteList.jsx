import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ toss }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>현재 작성된 게시물</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <table>
            <Typography id="modal-modal-title" variant="h6" component="thead">
              <tr>
                <th>작성된 게시물</th>
              </tr>
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              component="tbody">
              {toss}
            </Typography>
          </table>
        </Box>
      </Modal>
    </div>
  );
}
