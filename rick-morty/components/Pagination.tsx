import Link from "next/link"
import Styles  from '@/styles/Pagination.module.css'
export default function Pagination(props:any) {

    const pageNumbers = [];
    for(let i = 1; i<=props.totalPage; i++){
        pageNumbers.push(i)
    }
    return (
        <div className={Styles.paginationFormat}>
            <button>prev</button>
            {pageNumbers.map((pageNumber) => {
                return <div className={Styles.page}>
                    <button onClick={props.buttonHandler} value={pageNumber}>{pageNumber}</button>
                    </div>
        
            })}
            <button>Next</button>
        </div>
    )
}