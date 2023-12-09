const alphaRegex = /^[a-zA-Z]+$/;   //Name must contain on alpha characters.
const phoneRegex = /^(\d{3}-)?\d{3}-\d{4}$/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})$/;

/*********
 * validateForm
 * 
 * This is the function that is called when the form is submitted.
 * 
 * It performs a variety of form validation features and will return true
 * if the data is valid.  Otherwise it returns false.
 */
function validateForm() {
    

    if( !isFirstNameValid() ){
        return false;
    }
    else if( !isLastNameValid()){
        return false;
    }
    else if( !isEmailValid())
    {  
        console.log( "email returned false");
        return false;
    }
    else if( !isPhoneValid())
    {
        return false;
    }
    else if( !isSubjectValid())
    {
        return false;
    }
    else if( !isMessageValid())
    {
        return false;
    }
    else if( !isChecked( document.querySelectorAll('input[type="checkbox"]:checked'))) 
    {
        return false;
    }
    else 
    {
        removeError();
        return true;
    }
}


/***
 * Function that is called when the reset button is pressed.
 * 
 * Reset will clear all of the input fields by default.
 * 
 * This will remove the error message from the screen as well.
 */
function resetForm(event)
{
    removeError();
}


/***
 * displayError
 * 
 * The parameter is a string for the error description
 * 
 * Set the text of the error to the parameter value
 * Add the class element 'error', which makes the error field visible.
 */
function displayError( errorValue){
    const errorField = document.getElementById('error-message');

    errorField.textContent = errorValue;
    errorField.classList.add('error');

}

/***
 * removeError
 * 
 * Sets the text of the error to blank, and removes the
 * .css class  .error so the the error field no longer is visible.
 */
function removeError( ){
    const errorField = document.getElementById('error-message');
    errorField.textContent = "";
    errorField.classList.remove('error');
}

/***
 * isFirstNameValid
 * 
 * The firstname must be at least two characters long, and it must also
 * only contain alpha characters.  alphaRegex.test ensure that the first name
 * adheres to the definition.
 * 
 */
function isFirstNameValid() {
    let fNameField = document.getElementById('firstName');
    let firstName = fNameField.value.trim();

    if( firstName.length < 2 || !alphaRegex.test(firstName)){
        displayError('First name must be at least 2 alpha characters');
        fNameField.classList.add('fieldError');  //red outline for form field when there is an error.
        fNameField.focus();
        return false;
    }
    else{
        fNameField.classList.remove('fieldError');  //green outline (default) when there is no error
        return true;
    }
}

/***
 * isLastNameValid
 * 
 * The last name must be atleast two characters and it must also 
 * only contain alpha characters.
 * 
 */
function isLastNameValid() {
    let lNameField = document.getElementById('lastName');
    let lastName = lNameField.value.trim();

    if( lastName.length < 2 || !alphaRegex.test(lastName)){
        displayError('Last name must be at least 2 alpha characters');
        lNameField.classList.add('fieldError'); //red outline for form field when there is an error.
        lNameField.focus();
        return false;
    }
    else {
        lNameField.classList.remove('fieldError'); //green outline (default) when there is no error
        return true;
    }
}

/***
 * The email address must be x@y.z  where z must be three letters
 * 
 */
function isEmailValid(  )
{
    let eField = document.getElementById('email');
    let email = eField.value.trim();

    if( email == "" || !emailRegex.test(email)){
        displayError('Email address is not the correct format');
        eField.classList.add("fieldError");  //red outline for form field when there is an error.
        eField.focus();
        return false;
    }
    else{
        eField.classList.remove("fieldError");
        return true;
    }
    
}

/***
 * The phone number must be xxx-xxx-xxxx
 * 
 */
function isPhoneValid(  )
{
    let pField = document.getElementById('phone');
    let phone = pField.value.trim();

    if( phone == "" || !phoneRegex.test(phone)){
        displayError('Phone number is not the correct format');
        pField.focus();
        pField.classList.add("fieldError");  //red outline for form field when there is an error.
        return false;
    }
    else{
        pField.classList.remove("fieldError");
        return true;
    }
    
}


/***
 * The subject cannot be blank
 * 
 */
function isSubjectValid(  )
{
    let sField = document.getElementById('subject');
    let subject = sField.value.trim();

    if( subject == "" ){
        displayError('Subject cannot be blank');
        sField.focus();
        sField.classList.add("fieldError");  //red outline for form field when there is an error.
        return false;
    }
    else{
        sField.classList.remove("fieldError");
        return true;
    }
    
}


/***
 * The message cannot be blank
 * 
 */
function isMessageValid(  )
{
    let mField = document.getElementById('message');
    let message = mField.value.trim();

    if( message == "" ){
        displayError('Message cannot be blank');
        mField.focus();
        mField.classList.add("fieldError");  //red outline for form field when there is an error.
        return false;
    }
    else{
        mField.classList.remove("fieldError");
        return true;
    }
    
}


/***
 * isChecked
 * 
 * checkList is a list of all checked values.
 * 
 * if any values in the checkbox input type are selected,
 * then the list will have a length greater than zero.  
 */
function isChecked( checkList )
{
    if(checkList.length > 0) {
        return true;
    }
    else {
        displayError('At least one contact preference must be selected');
        return false;
    }
}
