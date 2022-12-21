import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../../utils/style/colors'
import homeIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #f9f9fc;
    margin: auto;
    margin-top: 50px;
`

const HomeAbout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 80px 40px 80px 40px;
`

const Balloon = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50px;
    background-color: #e20202;
    transform: scale(${({ size }) => size});
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary}`}
`

function Home() {
    const [size, setsize] = useState(1)
    return (
        <HomeContainer>
            <HomeAbout>
                <div>
                    <h1
                        style={{
                            marginBottom: '25px',
                            fontSize: '55px',
                            fontWeight: '50px',
                        }}
                    >
                        Repérez vos besoins, <br />
                        on s’occupe du reste, <br />
                        avec les meilleurs talents
                    </h1>
                    <StyledLink to="/survey/1" $isFullLink>
                        Faire le test
                    </StyledLink>
                </div>
                <div>
                    <img src={homeIllustration} alt="Talent" />
                </div>
            </HomeAbout>
            <div>
                <h1 onClick={() => setsize(size + 0.1)}> Page d'accueil 🏠</h1>
                <Balloon size={size} />
            </div>
        </HomeContainer>
    )
}

export default Home
