export async function getPosts() {
  const response = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const data = await response.json()

  return data
}

export async function getPost(url) {
  const response = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
  return await response.json()
}