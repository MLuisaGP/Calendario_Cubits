import React,{useEffect, useState} from "react";
import { DateRangeContext } from "../context/DateRangeContext";
import { dateRange } from "../hook/dateRange";

const DateRangeProvider = ({children})=>{
    const [firstDay,setFirstDay] = useState('');
    const [countDays,setCountDays] = useState(0);
    const [marketDays,setMarketDays] = useState([]);

    useEffect(()=>{
        const days = dateRange(firstDay, countDays);
        setMarketDays(days)
    },[firstDay,countDays]);

    
    return(
        <DateRangeContext.Provider value={{ firstDay,setFirstDay,countDays,setCountDays, marketDays}}>
            {children}
        </DateRangeContext.Provider>
    )
};

export {DateRangeProvider};