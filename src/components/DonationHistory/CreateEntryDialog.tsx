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
      >
        <DialogTitle>
          CREATE A NEW DONATION
        </DialogTitle>

        <label htmlFor='brand-input'>Device Brand</label>
        <input id='brand-input' type='text'/>

        <label htmlFor='type-input'>Device Type</label>
        <input id='type-input' type='text'/>

        <label htmlFor='name-input'>Device Name/Model</label>
        <input id='name-input' type='text'/>

        <label htmlFor='quantity-input'>Quantity</label>
        <input id='quantity-input' type='number'/>

        <label htmlFor='accessories-input'>Any accessories included? (chargers, cases, etc.)</label>
        <input id='accessories-input' type='text'/>

        <p>Where can your items be picked up from?</p>
        <label htmlFor='address1-input'>Address Line 1</label>
        <input id='address1-input' type='text'/>
        <label htmlFor='address2-input'>Address Line 2</label>
        <input id='address2-input' type='text'/>
        <div>
          <label htmlFor='city-input'>City</label>
          <input id='city-input' type='text'/>
          <label htmlFor='state-input'>State/Province</label>
          <input id='state-input' type='text'/>
          <label htmlFor='zipcode-input'>Zipcode</label>
          <input id='zipcode-input' type='number'/>
        </div>

        <p>After submission of this form, you will receive an email to set up a quality validation meeting with our team. Once verified, your donation will be submitted and listed for request by a group/organization in need!</p>

        <DialogActions>
          <Button
            onClick={props.handleCancel}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              let nameInput: HTMLInputElement | null = document.getElementById('name-input') as HTMLInputElement;
              let quantityInput: HTMLInputElement | null = document.getElementById('quantity-input') as HTMLInputElement;
              if (nameInput && quantityInput && nameInput.value !== "" && quantityInput.value !== "") {
                props.handleConfirm(nameInput.value, Number(quantityInput.value));
              } else {
                props.handleCancel();
              }
            }}
          >
            Submit Donation
          </Button>
        </DialogActions>
      </Dialog>
    );
  }