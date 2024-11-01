import styles from "./page.module.css";

interface Cat {
  id: string;
  name: string;
  intelligence: number;
  origin: string;
}

interface CatCardProps {
  paginatedData: Cat[];
}

const CatCard: React.FC<CatCardProps> = ({ paginatedData }) => {
  return (
    <div className={styles.catContainer}>
      {paginatedData &&
        paginatedData.map((cat) => (
          <div key={cat.id} className={styles.catCard}>
            <p>Name: {cat.name}</p>
            <p>Intelligence: {cat.intelligence}</p>
            <p>Origin: {cat.origin}</p>
          </div>
        ))}
    </div>
  );
};
export default CatCard;
