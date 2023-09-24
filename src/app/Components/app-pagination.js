import { AppButton } from "./app-button"


export const AppPagination = ({ itemsPerPage , pageIndex, total, setPageIndex}) => {
    const lastPageIndex = Math.ceil(total / itemsPerPage) ;
    const totalPage = lastPageIndex === -1 ? 0 : lastPageIndex + 1;
    return (
       <div>
            <AppButton color={pageIndex === lastPageIndex ? "error" : "success"} disabled = {pageIndex===0} onClick={() => setPageIndex(pageIndex - 1)} >Prev</AppButton>
            <span>Page {pageIndex + 1}/ {totalPage }</span>
            <AppButton disabled = {pageIndex === lastPageIndex || lastPageIndex === -1} onClick={() => setPageIndex(pageIndex + 1)} color="success">Next</AppButton>
            <span>Total: {total} items</span>
       </div>
    )
}