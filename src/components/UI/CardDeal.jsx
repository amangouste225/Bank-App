import { card } from '../../assets/assets'
import styles, { layout } from '../../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className='sm:block hidden' />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        consequatur, quaerat vel quisquam recusandae.
      </p>
      <Button styles='mt-[20px]'>Get Started</Button>
    </div>

    <div className={layout.sectionImg}>
      <img
        src={card}
        alt='card'
        className='w-[100%] h-[100%] lg:p-[60px] p-0'
      />
    </div>
  </section>
)

export default CardDeal
