export function cn(...cns: Array<string>) {
  return cns.join(' ');
}

export function formatDate(data: string) {
  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(data));

  return formattedDate;
}

