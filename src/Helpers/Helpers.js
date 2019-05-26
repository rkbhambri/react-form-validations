
export const isEmpty = (item) => {
    let isValid = false;
    if (item.trim() === '') {
        isValid = true;
    }
    return isValid;
};

export const validateFirstname = (firstname) => {
    let isFirstnameValid = false;
    if (firstname.trim() !== '') {
        isFirstnameValid = true;
    }
    return isFirstnameValid;
};

export const validateLastname = (lastname) => {
    let isLastnameValid = false;
    if (lastname.trim() !== '') {
        isLastnameValid = true;
    }
    return isLastnameValid;
};

export const validateEmail = (email) => {
    let isEmailValid = false;
    let regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (email.trim() !== '' && regex.test(email)) {
        isEmailValid = true;
    }
    return isEmailValid;
};

export const validatePassword = (password) => {
    let isPasswordValid = false;
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,30}$/;
    if (password.trim() !== '' && regex.test(password)) {
        isPasswordValid = true;
    }
    return isPasswordValid;
};
