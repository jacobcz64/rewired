import HistoryEntry from './HistoryEntry';
import { useState } from 'react';
import "./history.css";
import CreateEntryDialog from './CreateEntryDialog'
import Navigation from "../DNavigation";
import Search from "../files/Vector.png";
import Dialog from '@mui/material/Dialog';
import { DialogTitle } from '@material-ui/core';
import { render } from '@testing-library/react';
import React from 'react';

interface DonationHistoryProps {

}
interface DonationHistoryState {
    createEntryDialogIsOpen: boolean;
    successDialogIsOpen: boolean;
    history: any[];
}

export default class DonationHistory extends React.Component<DonationHistoryProps, DonationHistoryState> {
    // const [history, setHistory] = useState([<HistoryEntry name='Microsoft' quantity={420} date='2'/>]);
    constructor(props : any) {
        super(props);
        this.state = {
            createEntryDialogIsOpen: false,
            successDialogIsOpen: false,
            history: []
        }
    }
    // const [createEntryDialogIsOpen, setCreateEntryDialogIsOpen] = useState(false);
    // const [successDialogIsOpen, setSuccessDialogIsOpen] = useState(false);

    getHistory = async () => {
        console.log("before request");
        const res = await fetch('/listings?id=1');
        const body = await res.json();
        
        if (res.status !== 200) {
            throw Error(body.message) 
        }
        console.log(body);
        return body;
    };
    postNewListing = async (brand: string, type: string, model: string, quantity: number, donor_id: number) => {
        console.log("posting");
        await fetch('/listing', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({brand: brand, device_type: type, model: model, quantity: quantity, id: donor_id})
        }).then(() => console.log("posted"))
    }

    handleCancel = () => {
        this.setState({
            createEntryDialogIsOpen: false
        });
    }

    handleConfirm = async (brand: string, type: string, model: string, quantity: number, donor_id: number) => {
        let today = new Date();
        let date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
        this.postNewListing(brand, type, model, quantity, donor_id).then(async () => {
            let updatedHistory = await this.getHistory();
            let newHistory : any[] = [];
            Object.keys(updatedHistory).forEach((i) => {
                console.log(typeof updatedHistory)
                console.log(updatedHistory[i]);
                newHistory.push(<HistoryEntry key={updatedHistory[i].listing_id} name={updatedHistory[i].model} quantity={updatedHistory[i].quantity} date='10/24/2021'/>);
            })
            this.setState({
                history: newHistory
            });
        }).then(() => {
            this.setState(() => {
                return {successDialogIsOpen: true, createEntryDialogIsOpen: false}
            })
        }).then(() => {
            setTimeout(() => {this.setState({
                successDialogIsOpen: false
            })}, 2500);
        })        
    }
    
    async componentDidMount() {
        let updatedHistory = await this.getHistory();
        let newHistory : any[] = [];
        console.log(updatedHistory);
        Object.keys(updatedHistory).forEach((i) => {
            console.log(typeof updatedHistory)
            console.log(updatedHistory[i]);
            newHistory.push(<HistoryEntry key={updatedHistory[i].listing_id} name={updatedHistory[i].model} quantity={updatedHistory[i].quantity} date='10/24/2021'/>);
        })
        this.setState({
            history: newHistory
        });
    }

    render() {
        return (
            <div>
                <Navigation />
                    <p className="page-title">Pending Donations</p>
                    <img
                    id="search-img"
                    src={Search}
                    alt=""
                />
                <p>Donation History</p>
                <input type="text" placeholder="Search.."></input>
                <div id='history'>
                    {this.state.history}
                </div>
                <button onClick={() => {
                    this.setState({
                        createEntryDialogIsOpen: true
                    })
                }}>Add New Listing</button>
                <CreateEntryDialog open={this.state.createEntryDialogIsOpen}
                                   text="Add new listing"
                                   handleCancel={this.handleCancel}
                                   handleConfirm={this.handleConfirm}/>
                <Dialog open={this.state.successDialogIsOpen} onClose={() => this.setState({successDialogIsOpen: false})}>
                    <DialogTitle>
                        Thank you for your donation!
                    </DialogTitle>
                </Dialog> 
            </div>
        );
    }
}