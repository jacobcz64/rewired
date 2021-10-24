import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
  } from "@material-ui/core";
  
  interface CancelConfirmDialogProps {
    open: boolean;
    text: string;
    handleCancel: () => void;
    handleConfirm: (deviceName: string, quantity: number) => void;
  }

  /**
   * Dialog to add a new listing
   */
  export default function CancelConfirmDialog(props: CancelConfirmDialogProps) {
    return (
      <Dialog
        open={props.open}
        onClose={props.handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Add a new listing
        </DialogTitle>
        <input id='name-input' type='text' placeholder='Device Name...'></input>
        <input id='quantity-input' type='number' placeholder='Quantity...'></input>
        <DialogActions>
          <Button
            onClick={props.handleCancel}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              let nameInput: HTMLInputElement | null = document.getElementById('name-input') as HTMLInputElement;
              let quantityInput: HTMLInputElement | null = document.getElementById('quantity-input') as HTMLInputElement;
              if (nameInput && quantityInput) {
                props.handleConfirm(nameInput.value, Number(quantityInput.value));
              } else {
                props.handleCancel();
              }
            }}
          >
            Add New Listing
          </Button>
        </DialogActions>
      </Dialog>
    );
  }