import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logo from '../../assets/dark-logo.png'

const HeaderHeader = styled.header`
    width: 90%;
    display: flex;
    flex-direction: row;
    height: 50px;
    margin: auto;
`

const HeaderImage = styled.img`
    width: 100px;
    height: 50px;
    display: flex;
`

const HeaderNav = styled.nav`
    display: flex;
    margin-left: auto;
    flex-wrap: wrap;
    gap: 15px;
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

function Header() {
    return (
        <HeaderHeader>
            <HeaderImage src={logo} alt="Shiny Agency" />
            <HeaderNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </HeaderNav>
        </HeaderHeader>
    )
}

export default Header
