import styles from "./page.module.css"
interface PaginationProps {
    totalPages: number;
    currentPage: number;
    handlePageChange: (pageNumber: number) => void;
  }

  const PaginationComponent: React.FC<PaginationProps> = ({ totalPages, currentPage, handlePageChange }) => {
    return(
        <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.activePage : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    )
}

export default PaginationComponent;