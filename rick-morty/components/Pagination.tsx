import Link from "next/link"
import Styles  from '@/styles/Pagination.module.css'
import { useEffect, useRef, useState } from "react";


function mobilePagination(totalPages:Number[]) {
    console.log('here')
    return (
        <div>
            <select name="mobilePagination" id="mobilePagination">
                {totalPages.map((pages:Number) => {
                    return (<option value={String(pages)}>
                        {String(pages)}
                    </option>)
                }
                )}
            </select>
        </div>
    )
}


export default function Pagination(props:any) {
    const [windowWidth, setWindowWidth] = useState<number | string>(0);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        return () => window.removeEventListener("resize",handleResize); 
    })

    // pagination starts here
    const pageNumbers = [];
    for(let i = 1; i<=props.totalPage; i++){
        pageNumbers.push(i)
    }
    console.log(windowWidth);


    // if (windowWidth < 800){
    //     return (
    //     <div>
    //         <select name="mobilePagination" id="mobilePagination">
    //             {pageNumbers.map((pages:Number) => {
    //                 return (<option value={String(pages)}>
    //                     {String(pages)}
    //                 </option>)
    //             }
    //             )}
    //         </select>
    //     </div>
    // )

    // }else {
        return (
            <>
            {windowWidth < 900? 
            <div>
                <select name="mobilePagination" id="mobilePagination">
                    {pageNumbers.map((pages:Number) => {
                        return (<option value={String(pages)}>
                                {String(pages)}
                                </option>)
                    }
                    )}
                </select>
            </div>
            : 
            <div className={Styles.paginationFormat}>
                <button>prev</button>
                {pageNumbers.map((pageNumber) => {
                return (<div className={Styles.page}><button onClick={props.buttonHandler} value={pageNumber}>{pageNumber}</button></div>)
            
                })}
                <button>Next</button>
                
            </div>}
            
            </>
        )
    // }

    
}