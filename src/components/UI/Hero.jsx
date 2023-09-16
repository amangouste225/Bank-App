import styles from '../../style'
import { discount, robot } from '../../assets/assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id='home' className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div
        className={`{items-center py-[6px] flex flex-row px-4 bg-discount-gradient rounded-[10px] mb-2`}
      >
        <img src={discount} alt='discount' className='w-[32px] h-[32px] ' />
        <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20%</span> Discount for {''}
          <span className='text-white'>1 Month</span> Account
        </p>
      </div>

      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className=' items-center font-poppins text-white font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] '>
          The next <br className='sm:block hidden' />
          <span>Generation</span>
        </h1>

        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted></GetStarted>
        </div>
      </div>

      <h1 className='font-poppins text-white font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full'>
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of expert uses a methodology to identifty the credit card most
        likely to fit youe needs. We examine annual percentage rate, annual
        fees.
      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt='robot'
        className='w-[100%] h-[100%] relative z-[5]'
      />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-100 bottom-40 white__gradient'></div>
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient'></div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  </section>
)

export default Hero
