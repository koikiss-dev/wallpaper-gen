import { getDataImageSearch } from "../services/apiconfig/indexApi";
import { useState, useEffect, useCallback } from "react";
const useGetImage = (q, page) => {
  const [images, setImages] = useState([]);
  const [pageValue, setPageValue] = useState(1);
  const [loader, setLoader] = useState(false);

  const getImage = useCallback(async (value, pageIndex) => {
    try {
      setLoader(true);
      const { data } = await getDataImageSearch({
        params: {
          query: value,
          page: pageIndex,
        },
      });
      const response = data.data.results;
      const p = data.data.total_pages;
      setImages(response);
      if (response.length !== 0) {
        setLoader(false);
      } else {
        setLoader(true);
      }
      setPageValue(p);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getImage(q, page);
  }, [page, q, getImage]);
  return [images, pageValue, loader];
};

export default useGetImage;
