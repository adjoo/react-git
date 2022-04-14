import React from 'react';
import style from './Paginator.module.css';


let Paginator = ({currentPage, totalItemsCount, pageSize, pageChanged}) => {
    const PORTION_SIZE = 10;
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = []
    for (let i = 1; i < pagesCount + 1; i++) {pages.push(i)}


    let portionNumber =  Math.ceil(currentPage / PORTION_SIZE);
    let portionNumberStart = ( (portionNumber - 1) * PORTION_SIZE )+ 1;
    let portionNumberEnd = portionNumberStart + PORTION_SIZE;
    pages = pages.filter((pageNumber)=>{
        return (pageNumber >= portionNumberStart) && (pageNumber < portionNumberEnd)
    })

    let onPrevButtonClick = (i) => {
        let nextPage = currentPage - PORTION_SIZE
        if (nextPage < 1) {nextPage = 1}
        pageChanged(nextPage)
    }
    let onNextButtonClick = (i) => {
        let nextPage = currentPage + PORTION_SIZE
        if (nextPage > pagesCount) {nextPage = pagesCount}
        pageChanged(nextPage)
    }

    return <div className={style.pagination}>
            <button className={style.paginatorButton}
                    onClick={onPrevButtonClick}
                    disabled={ portionNumberStart === 1 ? 'disabled' : null}>PREV</button>
            {pages.map((i) => {
                    return <span className={currentPage === i && style.active}
                                 onClick={() => {pageChanged(i)}}>{i}</span>
                })}
            <button className={style.paginatorButton}
                    onClick={onNextButtonClick}
                    disabled={ portionNumberEnd >= pagesCount ? 'disabled' : null}>NEXT</button>
            </div>

}

export default Paginator;