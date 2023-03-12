import { useState } from "react";

function useValidation () {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
        setIsFormValid(e.target.closest('#form').checkValidity());
    }

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