import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/post.server'
import { getCuso } from '../models/curso.server'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPosts from '~/components/listado-posts'
import Curso from '~/components/curso'

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCuso()
  ])

  console.log(curso)

  return {
    guitarras,
    posts: posts.data,
    curso: curso.data
  }
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className="contenedor">
        <ListadoGuitarras 
          guitarras={guitarras}
        />
      </main>

      <Curso 
        curso={curso.attributes}
      />

      <section className='contenedor'>
        <ListadoPosts 
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index