import { useState } from "react";

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);

    const onCahnge = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.values,
        }));
    }

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    }

    return {
        values,
        onCahnge,
        onSubmit,
    }
}