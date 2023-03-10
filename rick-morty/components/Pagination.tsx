import Styles  from '@/styles/Pagination.module.css'
import { useEffect, useState } from "react";


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
    // console.log(windowWidth);

        return (
            <>
            <button>prev</button>

            {windowWidth < 800? 
            <div className={Styles.mobilePagination}>
                <select onChange={props.buttonHandler} name="mobilePagination" id="mobilePagination">
                    {pageNumbers.map((pages:Number) => {
                        return (<option key={String(pages)} value={String(pages)}>
                                {String(pages)}
                                </option>)
                    }
                    )}
                </select>
            </div>
            : 
            <div className={Styles.paginationFormat}>
                {pageNumbers.map((pageNumber) => {
                return (<div key={pageNumber} className={Styles.page}><button onClick={props.buttonHandler} value={pageNumber}>{pageNumber}</button></div>)
            
                })}

            </div>}
            
            <button>Next</button>
            
            </>
        )
    
}