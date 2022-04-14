import React from 'react';
import {create} from "react-test-renderer"
import Paginator from "./Paginator";


describe("Paginator component",()=>{
    test("pages array should be equal portion size",()=>{
        let currentPage= 7, totalItemsCount= 1000, pageSize= 10;
        let pagesCount = Math.ceil(totalItemsCount / pageSize);
        let pages = []
        for (let i = 1; i < pagesCount + 1; i++) {pages.push(i)}
        let portionSize = 5;
        let portionNumber =  Math.ceil(currentPage / portionSize);
        let portionNumberStart = ( (portionNumber - 1) * portionSize )+ 1;
        let portionNumberEnd = portionNumberStart + portionSize;
        pages = pages.filter((pageNumber)=>{
            return (pageNumber >= portionNumberStart) && (pageNumber < portionNumberEnd)
        })
        expect(pages.length).toBe(portionSize)
    })
})