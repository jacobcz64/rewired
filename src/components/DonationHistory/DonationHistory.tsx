import HistoryEntry from './HistoryEntry';
import { useState } from 'react';
import "./history.css";
import CreateEntryDialog from './CreateEntryDialog'


export default function DonationHistory() {
    const [history, setHistory] = useState([<HistoryEntry name='Microsoft' quantity={420} date='2'/>]);
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    // Use something like this to add entries
    // setHistory(history.concat([<HistoryEntry name='Google' quantity={2} date='3'/>]))
    const handleCancel = () => {
        setDialogIsOpen(false);
    }
    const handleConfirm = (deviceName: string, quantity: number) => {
        let today = new Date();
        let date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
        setHistory(history.concat([<HistoryEntry name={deviceName} quantity={quantity} date={date}/>]))
        setDialogIsOpen(false);
    }
    return (
        <div>
            <p>Donation History</p>
            <input type="text" placeholder="Search.."></input>
            <div id='history'>
                {history}
            </div>
            <button onClick={() => {
                setDialogIsOpen(true);
            }}>Add New Listing</button>
            <CreateEntryDialog open={dialogIsOpen}
                               text="Add new listing"
                               handleCancel={handleCancel}
                               handleConfirm={handleConfirm}/>
        </div>
    );
}