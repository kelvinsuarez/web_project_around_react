export default class FormValidator {
    constructor(setting, formElement) {
      this._inputSelector = setting.inputSelector;
      this._submitButtonSelector = setting.submitButtonSelector;
      this._buttonSaveOff = setting.buttonSaveOff;
      this._inputErrorClass = setting.inputErrorClass;
      this._errorClass = setting.errorClass;
      this._formElement = formElement;
      this._buttonElement = formElement.querySelector(setting.submitButtonSelector);
      this._inputList = Array.from(formElement.querySelectorAll(setting.inputSelector));
      this.enableValidation();
    }
  
    enableValidation() {
      this._inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
          this._isValid(inputElement);
          this._toggleButtonState();
        });
      });
  
      this._formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._toggleButtonState();
    }
  
    _isValid(inputElement) {
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, errorElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement, errorElement);
      }
    }
  
    _showInputError(inputElement, errorElement, errorMessage) {
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  
    _hideInputError(inputElement, errorElement) {
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  
    _toggleButtonState() {
      if (this._hasInvalidInput()) {
        this._disableButton();
      } else {
        this._enableButton();
      }
    }
  
    _hasInvalidInput() {
      return this._inputList.some((inputElement) => !inputElement.validity.valid);
    }
  
    _disableButton() {
      this._buttonElement.classList.add(this._buttonSaveOff);
      this._buttonElement.setAttribute("disabled", true);
    }
  
    _enableButton() {
      this._buttonElement.classList.remove(this._buttonSaveOff);
      this._buttonElement.removeAttribute("disabled");
    }
  }