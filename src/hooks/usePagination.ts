import { useEffect, useState } from 'react';

export interface PaginationResult<T> {
  data: T[];
  pageNumbers: (string | number)[];
  currentPage: number | null;
  nextPage: number | null;
  previousPage: number | null;
  totalPages: number;
  next: () => void;
  previous: () => void;
  goTo: (pageNumber: number) => void;
}

export default function usePagination<T>(
  initialData: T[] = [],
  perPage: number = 10,
  shownPageNumber: number = 3
): PaginationResult<T> {
  const [data, setData] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(initialData.length / perPage);

  const generatePageNumbers = () => {
    const pageNumbers: (string | number)[] = [];

    if (totalPages <= shownPageNumber) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  useEffect(() => {
    setData(initialData.slice((currentPage - 1) * perPage, currentPage * perPage));
  }, [initialData, perPage, currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleGoToPage = (pageNumber: number) => {
    if (pageNumber !== currentPage && typeof pageNumber === 'number' && pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    data,
    pageNumbers,
    currentPage: totalPages > 0 ? currentPage : null,
    nextPage: currentPage < totalPages ? currentPage + 1 : null,
    previousPage: currentPage > 1 ? currentPage - 1 : null,
    totalPages,
    next: handleNext,
    previous: handlePrevious,
    goTo: handleGoToPage,
  };
}
