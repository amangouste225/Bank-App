import { feedback } from '../../constants'
import styles from '../../style'
import FeedBacks from './FeedBacks'

const Testimonials = () => (
  <section id='testimonials' className={`${styles.paddingY} flex-col relative`}>
    <div className='absolute z-[0] w-[60%] h-[60%] right-[50%] rounded-full blue__gradient'></div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
      <h1 className={`${styles.heading2}`}>
        What people are <br className='hidden sm:block' />
        saying about us
      </h1>
      <div className='w-full md:mt-0 mt-6'>
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quo
          reprehenderit fugit odio.
        </p>
      </div>
    </div>

    <div className='flex flex-wrap sm:justify-start  justify-center w-full feedback-container relative z-[1]'>
      {feedback.map((card, index) => (
        <FeedBacks {...card} index={index} key={card.id} />
      ))}
    </div>
  </section>
)

export default Testimonials
