import { useState, useEffect } from "react";
import { emailRegExp } from "../utils/regexp";

function useValidation () {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isValueValid, setIsValueValid] = useState({});

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
        setIsFormValid(e.target.closest('#form').checkValidity(isValueValid));
        switch (e.target.name) {
            case 'email':
                checkEmail(e.target.value);
                break
            default:
                setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
                setIsValueValid({ ...isValueValid, [e.target.name]: e.target.validity.valid });
                break
        }
    }

    function checkEmail(inputText) {
        if (!String(inputText).toLowerCase().match(emailRegExp)) {
            setErrors({ ...errors, email: "Введен некорректный email" });
            setIsValueValid({ ...isValueValid, email: false });
        } else {
            setErrors({ ...errors, email: '' });
            setIsValueValid({ ...isValueValid, email: true });
        }
    }

    useEffect(() => {
        if ( 
            Object.values(isValueValid).every((i) => i === true) &&
            Object.values(isValueValid).length !== 0
        ) {
            setIsFormValid(true)
        } else {
            setIsFormValid(false)
        }
    }, [isValueValid]);

    return {
        values,
        errors,
        isFormValid,
        setValues,
        setErrors,
        handleChange,
        setIsFormValid,
      }
}

export default useValidation;