import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
  const [data,setData] = useState({})
  let url = `https://open.er-api.com/v6/latest/USD${currency}`

  useEffect(()=>{
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>setData(data.rates))
    .catch((error)=> 'error in api call')
  },[currency])
  console.log(data);
  return data;
}

export default useCurrencyInfo;