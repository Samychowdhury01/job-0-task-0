/* eslint-disable @typescript-eslint/no-explicit-any */
export const exportToCSV = (data : any, filename = 'data.csv') => {
    // Convert data to CSV
    const csvRows = [];
    
    // Get the headers
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(','));
  
    // Format each row
    for (const row of data) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"'); // Escape quotes
        return `"${escaped}"`; // Wrap in quotes
      });
      csvRows.push(values.join(','));
    }
  
    // Create a Blob and generate a link to download the CSV
    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
  
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    a.click();
    URL.revokeObjectURL(url); // Clean up
  };
  