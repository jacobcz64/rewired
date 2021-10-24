import HistoryEntry from './HistoryEntry';
import { useState } from 'react';
import "./history.css";
import CreateEntryDialog from './CreateEntryDialog'
import Navigation from "../DNavigation";
import Search from "../files/Vector.png";


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
        <>
            <Navigation />
            <p className="page-title">Pending Donations</p>
            <img
              id="search-img"
              src={Search}
              alt=""
            />
            <input id="search-bar" type="text" placeholder="Search.."></input>
            <div className="donation-box">
                <div className="donation-entry">
                    {history}
                </div>
            </div>
            <button className="add" onClick={() => {
                setDialogIsOpen(true);
            }}>Add New Listing</button>
            <CreateEntryDialog open={dialogIsOpen}
                               text="Add new listing"
                               handleCancel={handleCancel}
                               handleConfirm={handleConfirm}/>
        </>
    );
}