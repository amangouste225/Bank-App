import { apple, bill, google } from '../../assets/assets'
import styles, { layout } from '../../style'

const Billing = () => (
  <section id='products' className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt={bill}
        className=' w-[100%] h-[100%] relative z-[5] lg:p-[60px] p-0'
      />

      <div className='absolute rounded-full z-[3] -left-1/2 top-0 w-[50%] h-[50%] white_gradient '></div>
      <div className='absolute rounded-full z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] pink_gradient '></div>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' />
        Billing & invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        suscipit quis dolorem.
      </p>

      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img
          src={apple}
          alt='apple'
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
        />

        <img
          src={google}
          alt='google'
          className='w-[128px] h-[42px] object-contain cursor-pointer'
        />
      </div>
    </div>
  </section>
)

export default Billing
