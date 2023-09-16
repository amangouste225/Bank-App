import styles from '../../style'
import { arrowUp } from '../../assets/assets'

const GetStarted = ({ children }) => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer bg-blue-gradient`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full group`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
          <span className='text-gradient'>Get</span>
          <span></span>
          <img
            src={arrowUp}
            alt='arrow'
            className='w-[23px] h-[23px] object-contain group-hover:translate-x-1 group-hover:-translate-y-1 ease-in duration-100'
          />
        </p>
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px] mr-3'>
        <span className='text-gradient'>Started</span>
        <span></span>
      </p>
    </div>
  </div>
)

export default GetStarted
