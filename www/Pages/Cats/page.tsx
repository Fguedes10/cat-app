'use client';

import { useEffect, useState } from "react";
import Loading from "@/www/shared/Loading/page";

interface Cat {
  id: string; 
  name: string;
  intelligence: number;
  origin: string;
}

const CatsPage = () => {
  const [data, setData] = useState<Cat[] | null>(null); 
  const [error, setError] = useState<string | null>(null); 
  const [loading, setLoading] = useState<boolean>(false); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      try {
        const result = await getAllBreeds(10, 0);
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []); 

  const getAllBreeds = async (limit: number, page: number) => {
    const response = await fetch(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await response.json();
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <p>Error: {error}</p>}
      <div>
        {data && data.map(cat => (
          <div key={cat.id}>
            {cat.intelligence}
            <div>
            {cat.origin}
            </div>
          </div>
        ))}
      </div>
      {!loading && !error && !data && <p>No data found</p>}
    </div>
  );
};

export default CatsPage;
