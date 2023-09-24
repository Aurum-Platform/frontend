export function getTimeFromSeconds(seconds: string): string {
  const date = new Date(parseInt(seconds) * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dateString =
    ('0' + day).slice(-2) +
    '-' +
    ('0' + month).slice(-2) +
    '-' +
    year.toString() +
    ' ' +
    ('0' + hours).slice(-2) +
    ':' +
    ('0' + minutes).slice(-2);

  return dateString;
}
