
import { StyledContainer } from './MiddleSection.styled';

type Props = {
    children?: JSX.Element | JSX.Element[];
};

const MiddleSection = ({ children }: Props) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )

}

export default MiddleSection;