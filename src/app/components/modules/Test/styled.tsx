import * as React from 'react';
import styled from 'styled-components';
import LogoIcon from 'vectors/logo.svg';

export const Section = styled.section`
    text-align: center;
`;

// Extend LogoIcon component with styling
export const LogoIconWrapper = styled(LogoIcon)`
    width: 200px;
    display: block;
    margin: 0 auto;
`;
