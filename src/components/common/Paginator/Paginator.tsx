import React from 'react';
import style from './Paginator.module.css';

type PropsType = {
    currentPage: number
    totalItemsCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

let Paginator: React.FC<PropsType> = ({currentPage, totalItemsCount, pageSize, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages: Array<number> = []
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i)
    }


    let portionNumber = Math.ceil(currentPage / portionSize);
    let portionNumberStart = ((portionNumber - 1) * portionSize) + 1;
    let portionNumberEnd = portionNumberStart + portionSize;
    pages = pages.filter((pageNumber) => {
        return (pageNumber >= portionNumberStart) && (pageNumber < portionNumberEnd)
    })

    let onPrevButtonClick = () => {
        let nextPage = currentPage - portionSize
        if (nextPage < 1) {
            nextPage = 1
        }
        onPageChanged(nextPage)
    }
    let onNextButtonClick = () => {
        let nextPage = currentPage + portionSize
        if (nextPage > pagesCount) {
            nextPage = pagesCount
        }
        onPageChanged(nextPage)
    }

    return <div className={style.pagination}>
        <button className={style.paginatorButton}
                onClick={onPrevButtonClick}
                disabled={portionNumberStart === 1}>PREV
        </button>
        {pages.map((i) => {
            return <span className={currentPage === i && style.active}
                         onClick={() => {
                             onPageChanged(i)
                         }}>{i}</span>
        })}
        <button className={style.paginatorButton}
                onClick={onNextButtonClick}
                disabled={portionNumberEnd >= pagesCount}>NEXT
        </button>
    </div>

}

export default Paginator;