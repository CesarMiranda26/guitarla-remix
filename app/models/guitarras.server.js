export async function getGuitarras() {
  const response = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const data = await response.json()

  return data
}

export async function getGuitarra(url) {
  const response = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  return await response.json()
}