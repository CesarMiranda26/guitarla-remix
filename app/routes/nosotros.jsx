import nosotros from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return (
    {
      title: 'GuitarLA - Nosotros'
    },
    {
      description: 'Venta de guitarras, blog de musica'
    }
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: nosotros,
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={nosotros} alt="Sobre nosotros" />

        <div>
          <p>Donec dapibus lorem et nisi bibendum, et lacinia mi vehicula. In quis ex ut eros auctor sollicitudin. Vivamus rhoncus scelerisque viverra. Vestibulum vel sapien sit amet purus vulputate scelerisque. Quisque sed malesuada risus. Ut a sem rhoncus, scelerisque lorem sed, convallis leo. Integer accumsan placerat nulla, at venenatis felis ornare quis. Sed pretium nisl eget efficitur commodo. Duis congue porttitor porta. Morbi at pulvinar neque.</p>

          <p>Donec dapibus lorem et nisi bibendum, et lacinia mi vehicula. In quis ex ut eros auctor sollicitudin. Vivamus rhoncus scelerisque viverra. Vestibulum vel sapien sit amet purus vulputate scelerisque. Quisque sed malesuada risus. Ut a sem rhoncus, scelerisque lorem sed, convallis leo. Integer accumsan placerat nulla, at venenatis felis ornare quis. Sed pretium nisl eget efficitur commodo. Duis congue porttitor porta. Morbi at pulvinar neque.</p>

        </div>
      </div>
    </main>
  )
}

export default Nosotros