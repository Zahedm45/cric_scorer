import css from './Style.module.css';

export default function ConfirmSendOrder(props) {
    const sendHandler = (event) => {
        event.preventDefault();
        const sendOrderFinal = true;
        props.onConfirm({
            sendOrderFinal
        });
    };

    return (
        <form onSubmit={sendHandler}>
            <h4>You can now go to the checkout for payment.</h4>
            <div className={css.styles}>
                <button onClick={props.onClose}>
                    Close
                </button>
                <button>Checkout</button>
            </div>
        </form>
    );
};