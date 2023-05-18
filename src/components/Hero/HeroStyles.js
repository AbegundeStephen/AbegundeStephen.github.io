import styled from 'styled-components';


export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
   margin: 0 auto;
  }
`;
export const SectionName = styled.h1`
font-size: 30px;
font-weight:700px;
line-height: 48px;
color: goldenrod;
text-transform: capitalize;
margin-top: -3rem;
`
