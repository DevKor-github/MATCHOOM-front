const getStringByDate = (date: Date) => {
  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year.split('').join('')} / ${month.split('').join('')} / ${day.split('').join('')}`;
};

export { getStringByDate };
