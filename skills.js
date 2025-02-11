function daysBetweenDates(date1, date2) {
    // Convert both dates to milliseconds
    const date1Ms = new Date(date1).getTime();
    const date2Ms = new Date(date2).getTime();

    // Calculate the difference in milliseconds
    const differenceMs = Math.abs(date1Ms - date2Ms);

    // Convert back to days and return
    return Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
}

// Example usage:
const date1 = '2023-10-01';
const date2 = '2023-10-15';
console.log(daysBetweenDates(date1, date2)); // Output: 14

//Change this project to typescript project
