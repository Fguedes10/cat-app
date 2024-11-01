"use client";

import { useGetAllBreed } from "@/Services/useApiCall";
import { useState } from "react";
import styles from "./page.module.css";
import Loading from "@/www/shared/Loading/page";
import CatCard from "./components/PetCard/page";
import PaginationComponent from "./components/Pagination/page";
import FilterBar from "./components/filterBar/page";


const CatsPage = () => {
  const { data, error, isLoading } = useGetAllBreed();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBreed, setSelectedBreed] = useState<string>("");
  const [selectedOrigin, setSelectedOrigin] = useState<string>("");

  const itemsPerPage = 12;
  
  const filteredData = (data || []).filter(cat =>
    (!selectedBreed || cat.name === selectedBreed) &&
    (!selectedOrigin || cat.origin === selectedOrigin)
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.mainContainer}>
      {isLoading && <Loading />}
      <FilterBar 
        data={data || []} 
        selectedBreed={selectedBreed} 
        setSelectedBreed={setSelectedBreed} 
        selectedOrigin={selectedOrigin} 
        setSelectedOrigin={setSelectedOrigin} 
      />
      <div className={styles.contentContainer}>
        {error && <p>Error: {error.message}</p>}
        {filteredData.length === 0 && !isLoading && <p>No Cat found</p>}
        <CatCard paginatedData={paginatedData} />
        <PaginationComponent
          totalPages={totalPages}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default CatsPage;
