import React, { useState, useEffect } from "react"; //useState- хук - используй состояние

function Clicker() {
    // const [value, setValue] = useState(0); //результатом работы функции useState() - массив. value - значение, setValue - функция, обновляющая value
    // const [value2, setValue2] = useState('');
    // setValue(1);

    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    // useEffect(() => {
    //     console.log("hello from clicker");
    // }, []);
    // [] -зависимость, которая нужна, чтобы при обновлении переменной не вызывалась функция
    // [] - означает выполнить один раз

    useEffect(() => {
        console.log("hello from clicker", count);
        return () => console.log("goodbye from clicker");
    }, [count]);

    return (
        <div className="clicker">
            <button onClick={decrement}>-</button>
            <span style={{ display: "inline-block", margin: "0 0.5rem" }}>
                {count}
            </span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Clicker;
