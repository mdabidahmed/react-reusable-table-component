import React, {useEffect, useState} from 'react';
import '../App.css';
const renderData = (data: any) => {
  return (
    <ul>
      {data.map((todo: any, index: any) => {
        return <li key={index}>{todo.title}</li>;
      })}
    </ul>
  );
};

const PaginationComponet = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event: any) => {
    setCurrentPage(Number(event.target.id));
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const renderPageNumber = pages.map((number: any) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          className={currentPage == number ? 'active' : null}
          key={number}
          id={number}
          onClick={handleClick}>
          {number}
        </li>
      );
    } else {
      return null;
    }
  });
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response: any) => response.json())
      .then(json => setData(json));
  }, []);
  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit == 0) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }
  return (
    <>
      <h1>Todo List</h1> <br />
      {renderData(currentItems)}
      <ul className='pageNumber'>
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}>
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumber}
        {pageIncrementBtn}
        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}>
            Next
          </button>
        </li>
      </ul>
    </>
  );
};

export default PaginationComponet;

// {data.length > 0 ? <div>{renderData(data)}</div> : <p>Loading ...</p>}
