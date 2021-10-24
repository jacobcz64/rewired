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

    return (
        <div id='entry'>
            <p>{props.name}</p>
            <p>{props.quantity}</p>
            <p>{props.date}</p>
            {recipientStatus}
            {deliveryStatus}
        </div>
    );
}