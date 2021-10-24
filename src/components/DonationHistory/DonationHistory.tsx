import HistoryEntry from './HistoryEntry';
import { useState } from 'react';
import "./history.css";
import CreateEntryDialog from './CreateEntryDialog';
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@material-ui/core';


export default function DonationHistory() {
    const [history, setHistory] = useState([<HistoryEntry name='Microsoft' quantity={420} date='2'/>]);
    const [createEntryDialogIsOpen, setCreateEntryDialogIsOpen] = useState(false);
    const [successDialogIsOpen, setSuccessDialogIsOpen] = useState(false);

    const handleCancel = () => {
        setCreateEntryDialogIsOpen(false);
    }
    const handleConfirm = (deviceName: string, quantity: number) => {
        let today = new Date();
        let date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
        setHistory(history.concat([<HistoryEntry name={deviceName} quantity={quantity} date={date}/>]))
        setCreateEntryDialogIsOpen(false);
        setSuccessDialogIsOpen(true);
        setTimeout(() => {setSuccessDialogIsOpen(false)}, 2500);
    }
    
    return (
        <div>
            <p>Donation History</p>
            <input type="text" placeholder="Search.."></input>
            <div id='history'>
                {history}
            </div>
            <button onClick={() => {
                setCreateEntryDialogIsOpen(true);
            }}>Add New Listing</button>
            <CreateEntryDialog open={createEntryDialogIsOpen}
                               text="Add new listing"
                               handleCancel={handleCancel}
                               handleConfirm={handleConfirm}/>
            <Dialog open={successDialogIsOpen} onClose={() => setSuccessDialogIsOpen(false)}>
                <DialogTitle>
                    Thank you for your donation!
                </DialogTitle>
            </Dialog> 
        </div>
    );
}