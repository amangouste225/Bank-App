import { stats } from '../../constants'
import styles from '../../style'

function Stats() {
  return (
    <section
      className={`${styles.flexCenter} md:flex-row flex-col flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map(stat => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className='font-poppins font-semibold xs:text-[30px] text-[30px] xs:leading-[40px] leading-3 text-white '>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal text-gradient uppercase ml-3 leading-[21px] xs:leading-[26px] text-[15px] '>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}

export default Stats
