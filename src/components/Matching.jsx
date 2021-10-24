import React, {Component} from "react";

class Matching extends Component {
    state = {
        matches: []
    }

    componentDidMount() {
        this.getMatches()
            .then(res => this.setState({ matches : res}))
            .catch(err => console.log(err));
    }

    getMatches= async () => {
        const response = await fetch('/get_matches');
        const body = await response.json();
        console.log(body);

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    renderTableData() {
        return this.state.matches.map((match, index) => {
            const { donor_id, d_quantity, device_type, brand, model, recipient_id, r_quantity } = match //destructuring
            return (
                <tr key={index}>
                    <td>{donor_id}</td>
                    <td>{d_quantity}</td>
                    <td>{device_type}</td>
                    <td>{brand}</td>
                    <td>{model}</td>
                    <td>{recipient_id}</td>
                    <td>{r_quantity}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <h1 id='title'>Matches</h1>
                <table id='students'>
                    <thead>
                        <tr>
                            <th>Donor ID</th>
                            <th>Donor Quantity</th>
                            <th>Device Type</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Recipient ID</th>
                            <th>Requested quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Matching;