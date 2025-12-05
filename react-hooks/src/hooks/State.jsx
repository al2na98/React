import React, { useState, useEffect } from "react";

export const State = () => {
    const [state, setState] = useState({
        count: 0,
        isCounting: false,
    });

    // const [value, setValue] = useState(0);

    //можно отдельно вызвать функцию
    // setValue((prevValue) => {
    //     return prevValue + 1;
    // })

    //или вызвать функцию внутри useState
    // const [value, setValue] = useState(() => {
    //     const userCount = localStorage.getItem("count");
    //     return +userCount || 0;
    // });

    const handleCount = () => {
        setState({ ...state, count: state.count + 1 });
    };
    const handleStatus = () => {
        setState({ ...state, isCounting: !state.isCounting });
    };

    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <div>
            <button onClick={handleCount}>click</button>
            <button onClick={handleStatus}>and me</button>
        </div>
    );
};
