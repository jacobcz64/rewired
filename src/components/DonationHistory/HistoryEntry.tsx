import { useState } from "react";
import DonationDetailsDialog from './DonationDetailsDialog';

interface HistoryEntryProps {
    name: string,
    quantity: number,
    date: string,
    recipientFoundDate?: string,
    deliveredDate?: string
}

export default function HistoryEntry(props: HistoryEntryProps) {
    let recipientStatus = props.recipientFoundDate ? (<p>${props.recipientFoundDate}</p>) : (<p>Searching for Recipient</p>);
    let deliveryStatus = props.deliveredDate ? (<p>${props.deliveredDate}</p>) : (<p>Distribution Pending</p>);
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);
    const handleCancel = () => {
        setDetailsIsOpen(false);
    };

    return (
        <div>
            <div id='entry' onClick={() => {setDetailsIsOpen(true)}}>
                <p>{props.name}</p>
                <p>{props.quantity}</p>
                <p>{props.date}</p>
                {recipientStatus}
                {deliveryStatus}
            </div>
            <DonationDetailsDialog open={detailsIsOpen}
                                        name={props.name}
                                        quantity={props.quantity}
                                        text={props.name}
                                        date={props.date}
                                        recipientFound={Boolean(props.recipientFoundDate)}
                                        delivered={Boolean(props.deliveredDate)}
                                        handleCancel={handleCancel} />
        </div>

    );
}