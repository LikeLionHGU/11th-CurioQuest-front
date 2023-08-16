import styled from 'styled-components';
import theme from '../theme';
import GoogleButton from '../auth/GoogleButton';

const Div = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 844px;
  overflow: hidden;
  text-align: left;
  font-size: 40px;
  font-family: var(--font-avenir);
`;

const Container = styled.div`
  position: absolute;
  top: 100px;
  left: 50px;
  width: 217px;
  height: 55px;
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  background: linear-gradient(180deg, #2ce477, rgba(44, 228, 119, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export default function SignUp() {
  return (
    <Div>
      <Container>
        <Title>서비스 소개</Title>
      </Container>
    </Div>
  );
}
