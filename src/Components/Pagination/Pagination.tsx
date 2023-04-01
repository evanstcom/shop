import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.sass";

interface Props {
    onChangePage: (num: number) => void
}

export const Pagination = (props: Props) => {
    const { onChangePage } = props;
    /*     const [itemOffset, setItemOffset] = useState(0);
    
        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const itemsPerPage = 3;
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = items.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(items.length / itemsPerPage);
        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % items.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        }; */
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(e) => onChangePage(e.selected + 1)}
            pageRangeDisplayed={6}
            pageCount={4}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    );
};
