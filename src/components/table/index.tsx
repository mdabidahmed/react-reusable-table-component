import React from 'react';

const Table = ({
  data = null,
  columns = null,
  hover = true,
  striped = true
}: any) => {
  const getCaps = (head: any, field: any) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns &&
              columns.map((head: any) => (
                <th>{getCaps(head.header, head.field)}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row: any) => (
              <tr className={`${hover && 'hover'} ${striped && 'striped'}`}>
                {columns.map((col: any) => (
                  <td>{row[col.field]}</td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show</p>}
    </div>
  );
};

export default Table;
