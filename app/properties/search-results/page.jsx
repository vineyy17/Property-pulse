'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchResultsPage = () => {
  const serachParams = useSearchParams();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const location = serachParams.get('location');
  const propertyType = serachParams.get('propertyType');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`,
        );

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType]);

  console.log(properties);

  return <div>SearchResultsPage</div>;
};

export default SearchResultsPage;
