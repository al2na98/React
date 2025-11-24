import React, { useEffect, useRef, useState } from "react";

const WithRef = () => {
    // const inputEl = useRef(null);
    // console.log(inputEl);
    const numRef = useRef(0);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        numRef.current = 1;
        setCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        // console.log(inputEl)
        console.log(numRef.current);
    });

    return (
        <div>
            {/* <input placeholder="name" ref={inputEl} /> */}
            <button onClick={handleClick}>
                Ref: {numRef.current}, Count: {count}
            </button>
        </div>
    );
};
export default WithRef;

// 1. )  Хук useRef : инструмент в Реакте, который дает сохранять любые значения без рендеринга на сайте, а также он возвращает объект с единственным значением current,
// у которого есть метод focus. Также useRef часто используется для получения доступа к DOM-элементам. Например, можно создать реф для текстового поля и использовать его для управления фокусом:
// const inputRef = useRef(null);
// const focusInput = () => { inputRef.current.focus(); };
// return (
// <>
// <input ref={inputRef} type="text" />
// <button onClick={focusInput}>Фокус</button>
// </> );

// 2.)  Хук useEffect : инструмент (функция), который позволяет выполнять побочные эффекты в функциональных компонентах. Он срабатывает после рендеринга компонента
// и может использоваться для различных задач, таких как получение данных, подписка на события, манипуляции с DOM и очистка ресурсов.
// useEffect — это функция, которая принимает два аргумента:

// Функция эффекта: Это функция, которая будет выполняться после каждого рендера компонента.
// Массив зависимостей (необязательный): Это массив значений, при изменении которых эффект будет перезапущен. Если массив не указан, эффект будет срабатывать после каждого рендера
