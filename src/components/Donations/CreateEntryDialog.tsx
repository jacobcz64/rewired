import {
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
  } from "@material-ui/core";
  
  interface CreateEntryDialogProps {
    open: boolean;
    text: string;
    handleCancel: () => void;
    handleConfirm: (deviceName: string, quantity: number) => void;
  }

  /**
   * Dialog to add a new listing
   */
  export default function CreateEntryDialog(props: CreateEntryDialogProps) {
    return (
      <Dialog
        
        open={props.open}
        onClose={props.handleCancel}
      >
      <div className="form">
        <div className="form-title">
          CREATE A NEW DONATION
        </div>

        <label htmlFor='type-input'>Device Type</label>
        <input id='type-input' type='text'/>

        <label htmlFor='quantity-input'>Quantity</label>
        <input id='quantity-input' type='number'/>

        <label htmlFor='brand-input'>Device Brand</label>
        <input id='brand-input' type='text'/>

        <label htmlFor='name-input'>Device Name/Model</label>
        <input id='name-input' type='text'/>

        <label htmlFor='accessories-input'>Any accessories included? (chargers, cases, etc.)</label>
        <input id='accessories-input' type='text'/>

        <p>Where can your items be picked up from?</p>
        <label htmlFor='address1-input'>Address Line 1</label>
        <input id='address1-input' type='text'/>
        <label htmlFor='address2-input'>Address Line 2</label>
        <input id='address2-input' type='text'/>
        <div>
          <div className="location" >City</div>
          <div className="location" >State/Province</div>
          <div className="location" >Zipcode</div>
          <input id='state-input' type='text'/>
          <input id='city-input' type='text'/>
          <input id='zipcode-input' type='number'/>
        </div>

        <div id="email">After submission of this form, you will receive an email to set up a quality validation meeting with our team. 
        {/* <br/>
        <br/> */}
        Once verified, your donation will be submitted and listed for request by a group/organization in need!</div>

        <div id="confirm">
          .
          <div id="check-box"> 
          <input type="checkbox"/>
          </div>
          <div id="not-check-box">I agree to meet with a representative from the REWIRED quality assurance team to verify the condition of my items, and understand that my request may be denied if submitted items are not qualified for redistribution. </div>  
        </div>
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
        </div>
      </Dialog>
    );
  }