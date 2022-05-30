import Pagination from '@mui/material/Pagination';
import React from 'react';
import { usePagination } from './hook/Pagination';

const Page = ({data}: any) => {
  const [
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPage,
    displayPage
  ] = usePagination(5, data.length);
  console.log(totalPages);
  return (
    <>
      {(() => {
        const dispPost = [];
        for (let i = startPageIndex; i <= endPageIndex; i++) {
          dispPost.push(
            <div key={data[i].id}>
              <h3>
                <span>i+1</span>
                {data[i].title}
              </h3>
              <p>{data[i].body}</p>
            </div>
          );
        }
      })();
      }
      <Pagination count={10} color='primary' />
    </>
  );
};

export default Page;
