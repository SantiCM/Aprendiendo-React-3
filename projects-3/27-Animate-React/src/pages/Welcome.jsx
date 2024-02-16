import { Link } from 'react-router-dom';
import cityImg from '../assets/city.jpg';
import herooImg from '../assets/hero.png';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function WelcomePage() {

  // cuantos pxieles se desplego el usuario de x : scrollX, horizontal
  // cuantos pxieles se desplego el usuario de y : scrollY, vertical
  // scrollProgress, obtener un valor de desplazamiento relativo
  const {scrollY} = useScroll()

  //            Tranforms
  //                       damos el scroll de arriba
  //                               damos cada uno de sus movimientos en footgramas
  //                                  si es una en el otro array debe de ver 1 del otro array
  const yCity = useTransform(scrollY, [0,100, 200], [0, -100, -180])

  const yHero = useTransform(scrollY, [0, -200,], [0, -250])

  const opacityCity = useTransform(scrollY, [0, 200, 300, 500], [1, 0.5, 0.5, 0])

  const opacityHero = useTransform(scrollY, [0, 100, 300], [1, 1, 1])

  //const yText = useTransform(scrollY, [0, 100, 200], [0, 50, 200])

  //const scaleText = useTransform(scrollY, [0, 20], [1, 1.2])
  
  return (
  
    <>
    
      <header id="welcome-header">
    
        <motion.div /*style={{ scale: scaleText, y: yText }}*/  id="welcome-header-content">
    
          <h1>Ready for a challenge?</h1>
    
          <Link id="cta-link" to="/challenges">
    
            Get Started
    
          </Link>
    
        </motion.div>
    
        <motion.img

          style={{ opacity: opacityCity, y: yCity}}
    
          src={cityImg}
          
          alt="A city skyline touched by sunlight"
          
          id="city-image"
        
        />
        
        <motion.img style={{ y:yHero, opacity:opacityHero }} src={herooImg} alt="A superhero wearing a cape" id="hero-image" />
      
      </header>
      
      <main id="welcome-content">
      
        <section>
      
          <h2>There&apos;s never been a better time.</h2>
      
          <p>
      
            With our platform, you can set, track, and conquer challenges at
      
            your own pace. Whether it&apos;s personal growth, professional
      
            achievements, or just for fun, we&apos;ve got you covered.
      
          </p>
      
        </section>

        <section>
      
          <h2>Why Challenge Yourself?</h2>
      
          <p>
      
            Challenges provide a framework for growth. They push boundaries,
            test limits, and result in genuine progress. Here, we believe
            everyone has untapped potential, waiting to be unlocked.
      
          </p>
      
        </section>

        <section>
      
          <h2>Features</h2>
      
          <ul>
      
            <li>Custom challenge creation: Set the rules, define your pace.</li>
      
            <li>
              Track your progress: See your growth over time with our analytics
              tools.
      
            </li>
      
            <li>
              Community Support: Join our community and get motivated by peers.
      
            </li>
      
          </ul>
      
        </section>

        <section>
         
          <h2>Join Thousands Embracing The Challenge</h2>
         
          <p>
         
            “I never realized what I was capable of until I set my first
            challenge here. It&apos;s been a transformative experience!” - Alex
            P.
         
          </p>
         
          {/* You can add more testimonials or even a carousel for multiple testimonials */}
       
        </section>
      
      </main>
  
    </>
  
  );

}