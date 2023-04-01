export async function getCuso() {
  const response = await fetch(`${process.env.API_URL}/curso?populate=imagen`)
  const data = await response.json()

  return data
}