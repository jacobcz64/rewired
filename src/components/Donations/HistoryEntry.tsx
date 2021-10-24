import "./history.css";
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
    console.log("entries");

    return (
        <div className='entry'>
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
    );
}