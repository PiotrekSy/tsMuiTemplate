import { StyledContainer } from './AppContainer.styled';

type Props = {
    children?: JSX.Element | JSX.Element[];
};

const AppContainer = ({ children }: Props) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}

export default AppContainer;