import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export const ModalDescripcion = ({ open, handleOpen, selectedMovie }) => {
  const { Title, Year, Description, Genre, Director } = selectedMovie;
  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            {Title}
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-start gap-4">
          <Typography variant="small" className="text-sm">
            Año de lanzamiento: {Year}, Genero: {Genre}
          </Typography>
          <Typography variant="small" className="text-sm">
            Director: {Director}
          </Typography>
          <Typography className="text-center font-normal">
            {Description}
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="text" color="blue-gray" onClick={handleOpen}>
            close
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};
