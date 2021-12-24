export const validator = (values, fieldName) => {
    let errors = {};
    switch (fieldName) {
        case "title":
            validateTitle(values.email, errors);
            break;
        // case "password":
        //     validatePassword(values.password, errors);
        //     break;
        // case "phone":
        //     validatePhoneNumber(values.phone, errors);
        //     break;
        default:
    }
    return errors;
};

function validateTitle(title, errors) {
    let result = true;

    if (!title) {
        errors.title = "title is Required";
        result = false;
    }
    // else {
    //     var lower = /(?=.*[a-z])/;
    //     result = lower.test(title);

    // if (!result) {
    //     errors.password = "Password must contain at least one lower case letter.";
    //     result = false;
    // } else if (pass.length < 8) {
    //     errors.password = "Your password has less than 8 characters.";
    //     result = false;
    // }
    // }
    return result;
}