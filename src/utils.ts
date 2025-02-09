export function getDateDifference(date1: string | Date, date2= new Date()): string {
  let startDate = new Date(date1);
  let endDate = new Date(date2);

  // Проверка на валидность дат
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    throw new Error("Invalid date format. Use 'YYYY-MM-DD' or a valid Date object.");
  }

  // Убедимся, что startDate раньше endDate
  if (startDate > endDate) {
    [startDate, endDate] = [endDate, startDate];
  }

  let years: number = endDate.getFullYear() - startDate.getFullYear();
  let months: number = endDate.getMonth() - startDate.getMonth();
  const days: number = endDate.getDate() - startDate.getDate();

  // Корректировка месяцев и лет, если день во второй дате меньше
  if (days < 0) {
    months--;
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} ${years === 1 ? 'year' : 'years'}` : '';
  const monthStr = months > 0 ? `${months} ${months === 1 ? 'month' : 'months'}` : '';

  return [yearStr, monthStr].filter(Boolean).join(' ') || '0 months';
}
