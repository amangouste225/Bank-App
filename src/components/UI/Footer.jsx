import styles from '../../style'
import { mandiri } from '../../assets/assets'
import { footerLinks, socialMedia } from '../../constants'
const year = new Date().getFullYear()

const Footer = () => (
  <section
    id='footer'
    className={`${styles.flexCenter} ${styles.paddingY} flex-col`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-5 w-full`}>
      <div className='flex-1 flex flex-col justify-center sm:justify-start mr-10 '>
        <img
          src={mandiri}
          alt='logo'
          className='w-[266px] h-[52px] object-contain'
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make payments easy, reliable and secure.
        </p>
      </div>

      <div className='flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map(footerlink => (
          <div
            key={footerlink.key}
            className='flex flex-col ss:my-0 my-4 min-w-[150px]'
          >
            <h4 className='text-white font-medium font-poppins text-[18px] leading-[27px]'>
              {footerlink.title}
            </h4>
            <ul className='text-white list-none mt-3'>
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-base text-[16px] leading-[24px]  text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.length - 1 ? 'mb-2' : 'mb-0'
                  }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='mt-5 flex flex-col sm:flex-row sm:justify-between justify-center w-auto sm:w-full border-t-[1px] border-t-[#3F3E45 py-6'>
      <p className='text-white font-base font-poppins text-[16px] leading-[20px'>
        {year} Mandiri | Made by{' '}
        <a
          href='https://github.com/amangouste225'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          Amangoua
        </a>
      </p>

      <ul className='flex items-center justify-center mt-5 sm:mt-0 gap-5 list-none text-white'>
        {socialMedia.map(icons => (
          <li key={icons.id} className='text-white'>
            <a href={icons.link}>
              <img
                src={icons.icon}
                alt='icon'
                className='w-[21px] h-[21px] object-contain transform hover:scale-125 transition 100 ease-in'
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
export default Footer
