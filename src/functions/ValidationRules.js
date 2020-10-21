export default function validate(values) {
    const daysInMonth = (month, year) => {
        return new Date(year, month, 0).getDate();
    }

    let errors = {};
    if (!values.nameInput) {
        errors.nameInput = 'Name is required';
    } else if (values.nameInput.trim().length < 3) {
        errors.nameInput = 'Invalid data';
    }
    if (values.phoneNumber) {
        let phoneNumberTrim = values.phoneNumber.replace(/\s+/g, "");
        let phoneError = phoneNumberTrim.length !== 9 && 'Invalid data';
        errors.phoneNumber = phoneError;
    } else {
        errors.phoneNumber = 'Phone number is required';
    }
    if (!values.chess) {
        errors.chess = 'This field is required';
    }
    if (!values.birthD || values.birthD < 1 || values.birthD > daysInMonth(values.birthM, 2020)) {
        errors.birthD = "Invalid data"
    } else if (Math.floor((new Date() - new Date(values.birthY, values.birthM, values.birthD).getTime()) / 3.15576e+10) < 18) {
        errors.birthD = "You must be at least 18 years old";
        errors.birthM = "You must be at least 18 years old";
        errors.birthY = "You must be at least 18 years old";
    }

    return errors;
}