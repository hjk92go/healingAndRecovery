import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import list from "../css/WriteList.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "500px",
  width: "fit-content",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
  overflowY: "scroll",
};

export default function BasicModal({ toss }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className={list.listTitle} onClick={handleOpen}>
        지금까지 보관된 일상들
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          {/* <Box className={list.boxSt}> */}
          <table>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="thead"
              className={list.TbTitle}>
              <tr>
                <th>나의 하루들</th>
              </tr>
            </Typography>
            <Typography
              className={list.listTb}
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
