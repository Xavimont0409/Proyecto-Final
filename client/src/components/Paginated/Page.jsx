import React from "react";
import style from './Page.module.css';
import { useState } from "react";

const Page = ({ usersPerPage, users, paginated }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = [];

    for (let i = 0; i < Math.ceil(users.length / usersPerPage); i++){
        pageNumbers.push(i + 1);
    };

    const paginatedHandler = (page) => {
        setCurrentPage(page);
        paginated(page);
    };
    
    const maxPagesToShow = 100;
    
    const renderPageNumbers = () => {
        const firstPageToShow = currentPage <= maxPagesToShow ? 1 : currentPage - maxPagesToShow + 1;
        const lastPageToShow = Math.min(firstPageToShow + maxPagesToShow - 1, pageNumbers.length);

        return pageNumbers
            .slice(firstPageToShow - 1, lastPageToShow)
            .map((number) => (
                <li key={number} className={currentPage === number ? style.currentPage : undefined}>
                    <button onClick={() => paginatedHandler(number)}>{number}</button>
                </li> 
            ));
    };

    return (
        <nav>
            <ul className={style.paginado}>
                {currentPage > 1 && (
                    <li>
                        <button onClick={() => paginatedHandler(currentPage - 1)}>Prev</button>
                    </li>
                )}
                {renderPageNumbers()}
                {currentPage < pageNumbers.length && (
                    <li>
                        <button onClick={() => paginatedHandler(currentPage + 1)}>Next</button>
                    </li>
                )}
            </ul>
        </nav>
    )
};

export default Page;