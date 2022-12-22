export default class SingletonPaymentData {

    static myInstance = null;

    _userID = "";
    _name = "";
    _orderId = "";
    _email = "unknownemail@gmail.com";
    _amount = 100



    /**
     * @returns {SingletonPaymentData}
     */
    static getInstance() {
        if (SingletonPaymentData.myInstance == null) {
            SingletonPaymentData.myInstance = new SingletonPaymentData();
        }

        return this.myInstance;
    }


    getUserID() {
        return this._userID;
    }

    setUserID(id) {
        this._userID = id;
    }





    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get amount() {
        return this._amount;
    }

    set amount(value) {
        this._amount = value;
    }
}