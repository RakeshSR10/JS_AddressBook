//UC1 - Creating AddressBook 
class AddressBook{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    //constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    //getter and setter meyhod
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let firstNameRegex = RegExp('^[A]{1}[a-z]{3,}$');
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else throw 'First Name is Incorrect';    
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let lastNameRegex = RegExp('^[A]{1}[a-z]{2,}$');
        if(lastNameRegex.test(lastName))
            this.lastName = lastName;
        else throw 'Last Name is Incorrect';    
    }

    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp('^[A-Za-z0-9]{4,}$');
        if(addressRegex.test(address))
            this._address;
        else throw 'Address is Incorrect';    
    }
    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp('^[A-Za-z]{4,}$');
        if(cityRegex.test(city))
            this._city;
        else throw 'City is Incorrect';    
    }
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp('^[A-Za-z]{4,}$');
        if(stateRegex.test(state))
            this._address;
        else throw 'State is Incorrect';    
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp('^[0-9]{6}$');
        if(zipeRegex.test(zip))
            this._zip;
        else throw 'Zip is Incorrect';    
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneNumberRegex = RegExp('^((91[:-:])+([0-9]{10}))$');
        if(phoneNumberRegex.test(phoneNumber))
            this._phoneNumber;
        else throw 'Phone Number is Incorrect';    
    }
    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp('[a-zA-Z0-9_+&*-]+(?:\\."+"[a-zA-Z0-9]+)*@"+"(?:[a-zA-Z0-9]+\\.)+[a-zA-Z]{2,7}$');
        if(emailRegex.test(email))
            this._email;
        else throw 'Email is Incorrect';    
    }
    //toString() method
    toString() {
        return "First Name : "+this.firstName+", Last Name : "+this.lastName+", Address : "+this.address +
               ", City : "+this.city+", State : "+this.state+", Zip : "+this.zip +
               ", Phone Number : "+this.phoneNumber+", Email : "+this.email;
    }
}

try {
    let contact = new AddressBook("Rakesh", "King", "Siddanuru", "Davanagere", "Karnataka", 123456, "91 789654123", "rakesh@gmail.com");
    console.log(contact.toString());
} catch (e) {
    console.error(e);
}

