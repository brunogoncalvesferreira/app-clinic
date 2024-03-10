export function formmatedDate(date: string) {
  const dateConsult = new Date(date)

  return dateConsult.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}
