import styled from '@emotion/styled';
const FlexContainer = styled.div`
  margin: 0 15px;
  max-width: 1000px;
`;


const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

export default function Layout({children}) {

  return (
    <>
    <FlexContainer>
  <div>
    {children}
  </div>
  </FlexContainer>
  </>
  );

};

