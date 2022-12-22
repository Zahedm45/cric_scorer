import React, {Component} from 'react';
import axios from 'axios';
import './ContactUs.css'

class ContactUs extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            message: '',
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

        const {email, message} = this.state;

        const customerMessage = {
            email,
            message
        };

        axios
            .post('http://localhost:8080/api/message', customerMessage)
            .then(() => console.log('Message created'),
                //this.callAPI()
            )

            .catch(err => {
                console.error(err);
            });
    };
    render() {

        return (
            <div className="Form">
                <br />
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div><h1>Feel free to leave a message for the restaurant</h1></div>

                        <div><b>Email:</b></div>
                        <div className="add-rowSpace">
                            <input
                                type="email"
                                name="email"
                                placeholder="Please write your email here"
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div><b>Message:</b></div>
                        <div>
                            <div className="add-rowSpace">
                                <textarea id = "messageBox"
                                          name="message"
                                          placeholder="Please write your message here"
                                          onChange={this.handleInputChange}
                                />
                            </div>

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

export default ContactUs