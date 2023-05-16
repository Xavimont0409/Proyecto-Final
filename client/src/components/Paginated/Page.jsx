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
                    <a onClick={() => paginatedHandler(number)}>{number}</a>
                </li> 
            ));
    };

    return (
        <nav>
            <ul className={style.paginado}>
                {currentPage > 1 && (
                    <li>
                        <a onClick={() => paginatedHandler(currentPage - 1)}>Prev</a>
                    </li>
                )}
                {renderPageNumbers()}
                {currentPage < pageNumbers.length && (
                    <li>
                        <a onClick={() => paginatedHandler(currentPage + 1)}>Next</a>
                    </li>
                )}
            </ul>
        </nav>
    )
};

export default Page;