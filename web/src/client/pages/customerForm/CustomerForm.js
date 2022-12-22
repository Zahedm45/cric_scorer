// hjælp fra: https://therichpost.com/how-to-save-reactjs-form-data-in-nodejs-backend/
// kig på det her for mere styling https://www.w3schools.com/css/tryit.asp?filename=trycss_form_responsive

import React, {Component, useState} from 'react';
import axios from 'axios';
import './CustomerForm.css';

class CustomerForm extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: '',
            number: '',
            date: '',
            time: '',
            data: [],
        };

    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        const {email, name, number, date, time} = this.state;

        const customerData = {
            email,
            name,
            number,
            date,
            time
        };

        axios
            .post('http://localhost:8080/api/data', customerData)
            .then(() => console.log('data created'),

                //this.callAPI()

            )
            .catch(err => {
                console.error(err);
            });
    };

    render() {

        return (
            <div className="Form">
                <header>
                    <h1>Your information</h1>
                </header>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div className="add-rowSpace">
                                <label>
                                    <input
                                        className="input-text"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        onChange={this.handleInputChange}
                                    />
                                </label>
                            </div>
                            <div className="add-rowSpace">
                                <input
                                    className="input-text"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="add-rowSpace">
                                <input
                                    className="input-text"
                                    type="phone-number"
                                    name="number"
                                    placeholder="Number"
                                    onChange={this.handleInputChange}
                                />
                            </div>

                            <div className="add-rowSpace">
                                <input
                                    className="input-text"
                                    name="date" type="date"
                                    min={new Date().toISOString().slice(0,10)}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="add-rowSpace">
                                <select className="input-text" name="time" onChange={this.handleInputChange} >
                                    <option value="">--Please choose a pickup time--</option>
                                    <option value="15:00">15:00</option>
                                    <option value="15:30">15:30</option>
                                    <option value="16:00">16:00</option>
                                    <option value="16:30">16:30</option>
                                    <option value="17:00">17:00</option>
                                    <option value="17:30">17:30</option>
                                    <option value="18:00">18:00</option>
                                    <option value="18:30">18:30</option>
                                    <option value="19:00">19:00</option>
                                    <option value="19:30">19:30</option>
                                    <option value="20:00">20:00</option>
                                    <option value="20:30">20:30</option>
                                    <option value="21:00">21:00</option>
                                    <option value="21:30">21:30</option>
                                </select>
                            </div>

                            {/*
                        <input
                            name="date" type="datetime-local"
                            min={new Date().toISOString().slice(0, -8)}
                            onChange={this.handleInputChange}
                        />
                        */}
                        </div>
                        <button type="submit">
                            Submit information
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default CustomerForm;