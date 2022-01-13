import React from 'react';
import styled from 'styled-components';
import { Bubbles } from '../assets/images';
import { mixins, sizes } from '../styles';
import { Title } from '../styles/elements';
// import { Bubbles } from '../../assets/images';
// import { Title } from '../../styles/elements';

const StyledPageTitle = styled.div`
    padding: ${sizes.base} 0;

    ${Title} {
        position: relative;
        /* background: red; */
        width: fit-content;
    }

    svg {
        position: absolute;
        top: -8px;
        right: -${sizes.base};
        height: ${sizes.xxxxl};
        width: ${sizes.xxxxl};
        z-index: -1;
        animation: ${mixins.floating} 5s infinite ease-in-out;
    }
`;
export default function PageTitle({ title }) {
    return (
        <StyledPageTitle>
            <Title fontSize="38px" marginBottom="32px">
                <span>{title}</span>
                <Bubbles />
            </Title>
        </StyledPageTitle>
    );
}