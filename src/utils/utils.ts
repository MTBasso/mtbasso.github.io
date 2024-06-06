export function calculateDateDifference(dateString: string) {
  const givenDate = new Date(dateString);
  const today = new Date();

  const differenceInTime = today.getTime() - givenDate.getTime();

  const differenceInMinutes = Math.floor(differenceInTime / (1000 * 60));
  const differenceInHours = Math.floor(differenceInTime / (1000 * 60 * 60));
  const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

  const differenceInYears = today.getFullYear() - givenDate.getFullYear();
  const differenceInMonths =
    differenceInYears * 12 + (today.getMonth() - givenDate.getMonth());

  if (differenceInYears > 0) return `${differenceInYears} Y ago`;
  if (differenceInMonths > 0) return `${differenceInMonths} M ago`;
  if (differenceInDays > 0) return `${differenceInDays} d ago`;
  if (differenceInHours > 0) return `${differenceInHours} h ago`;
  if (differenceInMinutes > 0) return `${differenceInMinutes} min ago`;

  return 'just now';
}

export function extractRepoAndOwner(repository_url: string) {
  const regex = /^https:\/\/api\.github\.com\/repos\/([^\/]+\/[^\/]+)/;
  const match = repository_url.match(regex);

  if (match?.[1]) return match[1];

  return null;
}
