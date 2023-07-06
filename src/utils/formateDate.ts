export const formateDateToShow = (date: string) => {
  const dateSpit = date.split('-')

  const dateFormated = `${dateSpit[2]}/${dateSpit[1]}/${dateSpit[0]}`

  return dateFormated
}
