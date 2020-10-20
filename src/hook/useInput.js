import { useState, useEffect } from "react";
import Axios from 'axios';

const useInput = (initialVal, validate) => {
    const [inputValue, setInputValue] = useState(initialVal);
    const [errors, setErrors] = useState({});
    const [prefixData, setPrefixData] = useState([]);


    useEffect(() => {
        async function fetchData() {
            const result = await Axios(
                'https://restcountries.eu/rest/v2/all'
            );

            let prefixDataArray = [];
            result.data.map(r => {
                if (r.callingCodes[0] !== '') {
                    let innerValue = r.callingCodes[0] + ' (' + r.alpha2Code + ')';
                    prefixDataArray.push(innerValue)
                }
                return prefixDataArray;
            })
            setPrefixData(prefixDataArray);
        }
        fetchData();
    }, [])

    useEffect(() => {
        if (Object.keys(errors).length === 0) {
        }
    }, [errors]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(inputValue));
    }

    const handleInputChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    }

    return {
        inputValue,
        handleInputChange,
        handleSubmit,
        errors,
        prefixData
    };
};


export default useInput;