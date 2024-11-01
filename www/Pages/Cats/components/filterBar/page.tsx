import styles from "./page.module.css";

interface Cat {
  id: string;
  name: string;
  origin: string;
}

interface FilterBarProps {
  data: Cat[];
  selectedBreed: string;
  setSelectedBreed: (breed: string) => void;
  selectedOrigin: string;
  setSelectedOrigin: (origin: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ data, selectedBreed, setSelectedBreed, selectedOrigin, setSelectedOrigin }) => {
  const handleBreedChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBreed(event.target.value);
  };

  const handleOriginChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrigin(event.target.value);
  };

  return (
    <div className={styles.filtersContainer}>
      <p>Search by breed</p>
      <select name="catBreed" value={selectedBreed} onChange={handleBreedChange}>
        <option value="">All Breeds</option> {/* Default option */}
        {data.sort((a, b) => a.name.localeCompare(b.name)).map((cat) => (
          <option key={cat.id} value={cat.name} className={styles.option}>
            {cat.name}
          </option>
        ))}
      </select>

      <p>Search by origin</p>
      <select name="catOrigin" value={selectedOrigin} onChange={handleOriginChange}>
        <option value="">All Origins</option> {/* Default option */}
        {[...new Set(data.map((cat) => cat.origin))].sort().map((origin) => (
          <option key={origin} value={origin} className={styles.option}>
            {origin}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
