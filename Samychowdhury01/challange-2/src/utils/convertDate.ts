export const convertDate = (date: string): string => {
    const dateObject = new Date(date);
    
    // Check if the date is valid
    if (isNaN(dateObject.getTime())) {
      return 'Invalid date'; 
    }
  
    // Format the date as MM/DD/YYYY
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = dateObject.toLocaleDateString(undefined, options);
    
    console.log(formattedDate);
    return formattedDate;
  };
  