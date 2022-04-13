import { BtnWrapper, Button, Container, Logo, Link } from "./style"
import img from '../../assets/logo1.svg'

const LandingPage = () => {

  return (
    <Container>
        <Logo src={img} alt="logo" />
        <BtnWrapper>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
        </BtnWrapper>
    </Container>
  )
}

export default LandingPage