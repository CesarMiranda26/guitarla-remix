import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListadoGuitarras from '~/components/listado-guitarras'

export function meta() {
  return {
    title: 'GuitarLA - Tienda',
    description: 'GuitarLA - Nuestra coleccion de Guitarras'
  }
}

export async function loader() {
  const guitarras = await getGuitarras()

  return guitarras
}

const Tienda = () => {
  const guitarras = useLoaderData()

  return (
    <ListadoGuitarras 
      guitarras={guitarras}
    />
  )
}

export default Tienda