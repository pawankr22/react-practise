import {useEffect, useState} from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://currency-rate-exchange-api.onrender.com/inr`) 
        .then(((res) => res.json()))
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency,data]);
    console.log(data);
    return data
}

export default useCurrencyInfo;