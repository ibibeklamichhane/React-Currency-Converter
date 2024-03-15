 import {React,useId} from "react";
function InputBox({
    label, //input
    amount,//input
    onAmountChange,//input
    onCurrencychange, //used on the select area to determine if the currency value to be change is changed or not
    currencyOptions= [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,//disable the currency option enable

    
    className = "",
}) {
   const amountInputId = useId() //when there is unique changes in label as label is changed continuously

    return ( 
        <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className="w-1/2">
                <label htmlFor ={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    
                    id= {amountInputId} 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amountDisable}
                    value = {amount}
                    onChange= {(e) => onAmountChange && onAmountChange(Number(e.target.value)) }
                /> 
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencychange && onCurrencychange((e.target.value))}
                    disabled  ={currencyDisable}
                    
                >
                    {currencyOptions.map((currency) => currency(
                        <option key={currency} value = 
                        {currency}>
                            {currency}
                        </option>

                    ))}
                     
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
