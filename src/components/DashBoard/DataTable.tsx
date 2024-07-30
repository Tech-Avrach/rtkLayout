import React, { useState, useMemo } from 'react';

const DataTable = () => {
  const data = useMemo(() => [
    { id: 1, title: 'Near to your Garage', hostedBy: 'Sheetalp Panchal', createdAt: 'May 21, 2024, 15:13' },
    // Add more data here
  ], []);

  const columns = useMemo(() => [
    { Header: 'Listing Id', accessor: 'id' },
    { Header: 'Title', accessor: 'title' },
    { Header: 'Hosted By', accessor: 'hostedBy' },
    { Header: 'Created At', accessor: 'createdAt' },
  ], []);

  const [filter, setFilter] = useState('');

  const filteredData = useMemo(() => {
    if (!filter) return data;
    return data.filter(item => item.title.toLowerCase().includes(filter.toLowerCase()));
  }, [filter, data]);

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border border-gray-300 dark:border-foreground dark:bg-containerCard rounded-md"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <table className="min-w-full bg-white dark:bg-containerCard border ">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.accessor} className="border px-4 py-2 text-left">{col.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.accessor} className="border px-4 py-2">{row[col.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-between">
        <button className="p-2 bg-gray-200 dark:bg-containerCard dark:border rounded-md">Previous</button>
        <button className="p-2 bg-gray-200 dark:bg-containerCard dark:border rounded-md">Next</button>
      </div>
    </div>
  );
};

export default DataTable;
    