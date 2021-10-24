import { useState } from "react";
import DonationDetailsDialog from "./DonationDetailsDialog";
import "./history.css";
interface HistoryEntryProps {
    name: string,
    quantity: number,
    date: string,
    recipientFoundDate?: string,
    deliveredDate?: string
}

export default function HistoryEntry(props: HistoryEntryProps) {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);
    let recipientStatus = props.recipientFoundDate ? (<p>${props.recipientFoundDate}</p>) : (<p>Searching for Recipient</p>);
    let deliveryStatus = props.deliveredDate ? (<p>${props.deliveredDate}</p>) : (<p>Distribution Pending</p>);

    return (
        <div>
            <div className='entry' onClick={() => {setDialogIsOpen(true)}}>
                .
                <div className="left-entry">
                    <p id="entry-name">{props.name}</p>
                    <p id="entry-quantity">{props.quantity}</p>
                </div>
                <div className="right-entry">
                    <p id="entry-date">Submitted: {props.date}</p>
                    <p id="recipient-status">{recipientStatus}</p>
                    <p id="delivery-status">{deliveryStatus}</p>
                </div>
            </div>
            <DonationDetailsDialog open={dialogIsOpen} name={props.name}
                                   quantity={props.quantity} date={props.date}
                                   text={props.name}
                                   recipientFound={Boolean(props.recipientFoundDate)}
                                   delivered={Boolean(props.deliveredDate)}
                                   handleCancel={() => {setDialogIsOpen(false)}}
            />
        </div>
        
    );
}