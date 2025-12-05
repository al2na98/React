import React, { createContext, useContext } from "react";
import { Book } from "./Book";
import { CustomContext } from "../hooks/Context";

export function Books() {
    const { books = [] } = useContext(CustomContext);
    console.log(books);
    return (
        <div className="books">
            {books.map((book) => {
                return <Book key={book.id} {...book} />;
            })}
        </div>
    );
}
