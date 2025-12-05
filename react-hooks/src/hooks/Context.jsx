// Хук useContext решает проблему с передачей пропсов в дочерние компоненты.
// Использование Хука:
// 1) Для использование этого хука необходимо импортировать createContext, в компоненте сразу или в отдельном js файле. Потом там же мы должны вернуть в какую либо переменную результат вызова функции createContext => let Context = createContext(). В результате у нас будет переменная объект с свойствами 'Consumer' 'Provider' 'displayName'. объявление объекта с свойством provider и с указанными элементами в пропсе value, дает нам передать все значения из value в тех компонентах, которые были объявлены внутри объекта <Context.Provider> </Context.Provider>.
// 2) А для того чтобы взаимодействовать с значениями переданными в value контекста в дочерних компонентах, необходимо импортировать сам Context и хук useContext. Потом надо объявить переменную где у нас будут храниться значения value. Пример => let value = useContext(Context). в результате мы получим объект с свойствами, к которым мы можем обратиться через точку.

import React, { createContext, useState } from "react";

export const CustomContext = createContext();
export const Context = (props) => {
    const [books, setBooks] = useState([
        { id: 1, title: "JS" },
        { id: 2, title: "JSX" },
        { id: 3, title: "React" },
        { id: 4, title: "Vue" },
    ]);

    const addBook = (book) => {
        setBooks([book, ...books]);
    };

    const removeBook = (id) => {
        setBooks(books.filter((book) => book.id !== id));
    };

    const value = {
        books,
        addBook,
        removeBook,
    };

    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};
