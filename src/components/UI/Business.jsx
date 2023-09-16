import { features } from '../../constants'
import styles, { layout } from '../../style'
import Button from './Button'

const FeatureCard = ({ icon, title, paragraph }) => <></>

function Business() {
  return (
    <section id='features' className={layout.sectionInfo}>
      <div className={styles.heading2}>
        <h2>
          You do the business, <br className='sm:block hidden' />
          we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles='mt-5' />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} />
        ))}
      </div>
    </section>
  )
}

export default Business
