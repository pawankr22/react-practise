import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://currency-rate-exchange-api.onrender.com/inr`)
            .then(((res) => res.json()))
            .then((res) => setData(res[currency]))
            .catch((err) => console.error("Error fetching currency data:", err));
    }, [currency]);

    return data
}

export default useCurrencyInfo;