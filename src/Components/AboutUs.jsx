import '../Styles/AboutUs.css'
import OfficeZX from '../assets/officeSpace.jpeg'
import HandHolding from '../assets/handHolding.jpg'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/fontawesome-free-solid'
import Logo from '../assets/Logo 2.png'

import { Link } from 'react-router-dom'

function AboutUs() {
  return (
    <>
      <div className="aboutUsPage">
        <div className="home">
          <Link to={'/'}>
            <img src={Logo} alt="shortkart.logo" />
          </Link>
        </div>
        <div className="aboutUsGrid">
          <div className="officePhoto">
            <img src={OfficeZX} alt="shortKart-office" />
          </div>
          <div className="welcomeMsg">
            <p>
              Shortkart isn't just another e-commerce platform we're a vibrant community on a
              mission to transform the way you shop online. Founded on March 28, 2024, in the
              bustling streets of Delhi, India, Shortkart emerged from a simple yet powerful vision:
              to revolutionize the online shopping landscape.Our Mission: Empowering Connections,
              Enriching Lives At Shortkart, our mission is clear: we're here to empower individuals
              and businesses alike by providing a seamless online marketplace that blends quality,
              convenience, and community. We believe in fostering meaningful connections between
              customers and sellers, supporting local artisans and small businesses, and amplifying
              their voices on a global stage. Through Shortkart, we aim to curate a diverse range of
              products that not only meet your needs but exceed your expectations. Every purchase
              made on Shortkart contributes to the livelihoods of talented artisans and
              entrepreneurs, ensuring a sustainable future for communities worldwide. Join us as we
              embark on this journey to redefine your shopping experience. Together, let's discover
              the joy of shopping reimagined with Shortkart.
            </p>
          </div>

          <div className="apartMsg">
            <p>
              What makes Shortkart unique is our dedication to fostering meaningful connections
              between customers and sellers. We believe in supporting local artisans and small
              businesses, giving them a platform to showcase their craftsmanship to a global
              audience. With a commitment to authenticity and transparency, every purchase you make
              on Shortkart directly contributes to the livelihoods of these talented individuals.
            </p>
          </div>

          <div className="handHoldiPhoto">
            <img src={HandHolding} alt="hands" />
          </div>

          <div className="joinMsg">
            <p>
              When you shop with Shortkart, you can trust that you're not just buying a product
              you're investing in quality, reliability, and trust. Our customer-centric approach
              means your satisfaction is our top priority. Fr om seamless transactions to timely
              deliveries, we're here to ensure your shopping journey with us is nothing short of
              exceptional. Join the Shortkart Family We invite you to explore our vast selection of
              products, discover new favorites, and experience the joy of shopping reimagined.
              Whether you're seeking the latest trends or timeless classics, Shortkart is your
              one-stop destination for all your shopping needs. Thank you for choosing Shortkart. We
              look forward to serving you!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs
