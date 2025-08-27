import Aboutabt from '../components/Aboutabt'
import Abtcard from '../components/Abtcard'
import Abtchoose from '../components/Abtchoose'
import Cta from '../components/Cta'

const About = () => {
  return (
    <div>
      <Aboutabt />
      {/* <Abtcard /> Abtcard added in Aboutabt component for better UI */}
      <Abtchoose />
      <Cta />
    </div>
  )
}

export default About
