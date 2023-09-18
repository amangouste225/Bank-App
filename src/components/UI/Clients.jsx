import { clients } from '../../constants'
import styles from '../../style'
import { Carousel } from '@material-tailwind/react'

const Clients = () => (
  <section id='client' className={`${styles.flexCenter} my-4 px-4`}>
    <div
      className={`${styles.flexCenter} flex-wrap flex-row sm:w-full gap-5 sm:gap-0`}
    >
      {clients.map(clients => (
        <Carousel
          key={clients.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[60px] min-w-[120px]`}
          autoplay={true}
          loop={true}
          autoplayDelay={1000}
          transition={{ duration: 2 }}
        >
          <img
            src={clients.logo}
            alt={clients}
            className='sm:w-[120px] object-contain w-[100px]  cursor-pointer grayscale invert'
          />
        </Carousel>
      ))}
    </div>
  </section>
)

export default Clients
