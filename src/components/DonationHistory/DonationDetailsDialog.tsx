import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
  } from "@material-ui/core";
import './history.css';
  
  interface DonationDetailsDialogProps {
    open: boolean;
    name: string;
    quantity: number;
    text: string;
    date: string;
    recipientFound: boolean;
    delivered: boolean;
    handleCancel: () => void;
  }

  /**
   * Dialog to add a new listing
   */
  export default function DonationDetailsDialog(props: DonationDetailsDialogProps) {
    return (
      <Dialog
        open={props.open}
        onClose={props.handleCancel}
      >
        <DialogTitle>
          DONATION DETAILS
        </DialogTitle>

        <p>Name of Product: {props.name}</p>
        <p>Quantity donated: {props.quantity}</p>
        <p>The {props.text} is a really cool product. For a more in-depth review of the product please watch <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><u>this video</u></a></p>

        <DialogActions>
          <Button
            onClick={props.handleCancel}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }