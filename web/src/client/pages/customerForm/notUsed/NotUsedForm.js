// followed this guide https://www.geeksforgeeks.org/how-to-create-a-form-in-react/
//todo gør det mere interaktivt. https://dev.to/nsebhastian/react-form-real-time-validation-using-state-1eeg
//todo gør sådan der nogle felter der kan skippes samt andre ikke kan.
//todo tilføj validations

// sidst kigget efter https://www.digitalocean.com/community/tutorials/how-to-build-forms-in-react
//todo få phone number feltet til at virke så man kan skrive sit telefon nummer måske tillad text istedte for number. 

import {useReducer, useState} from "react";
//  npm simport './CustomerForm.css';

const formReducer = (state, e) => {
    return {
        ...state,
        [e.name]: e.value
    }
}

function NotUsedForm(){
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    // below function will be called when user
    // click on submit button .

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
            setFormData({
                reset: true
            })
        }, 3000);
    }

    const handleChange = e => {
        setFormData({
            name: e.target.name,
            value: e.target.value,
        });
    }

    return(
        <div className="App">
            <header className="App-header">
                {submitting &&
                    <div>
                        You are submitting the following:
                        <ul>
                            {Object.entries(formData).map(([name, value]) => (
                                <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                            ))}
                        </ul>
                    </div>
                }
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                {/*when user submit the form , handleSubmit() function will be called .*/}

                <fieldset disabled={submitting}>
                <label >
                    <p>Time:</p>

                { /*when user write in name input box , handleChange() function will be called. */}
                    <select name="time" onChange={handleChange} value={formData.time || ''}>
                        <option value="">--Please choose an option--</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                    </select>
                </label>

                <label >
                    <p>Name:</p>
                <input name="name" onChange={handleChange} value={formData.name || ''}/>
                { /*when user write in name input box , handleChange() function will be called. */}
                </label>

                <label >
                    <p>Phone Number:</p>
                    <input type="number" name="phoneNumber"  onChange={handleChange} value={formData.number || ''} />
                    { /*when user write in name input box , handleChange() function will be called. */}
                </label>

                <label >
                    <p>Email:</p>
                    <input type="text" name="email"  onChange={handleChange} value={formData.email || ''} />
                    { /*when user write in name input box , handleChange() function will be called. */}
                </label>

                <label >
                    <p>Comment:</p>
                    <input type="text" name="comment"  onChange={handleChange} value={formData.comment || ''} />
                    { /*when user write in name input box , handleChange() function will be called. */}
                </label>
                </fieldset>

                <button type="submit" disabled={submitting}>Submit</button>
            </form>
            </header>
        </div>
    )
}
export default NotUsedForm;


