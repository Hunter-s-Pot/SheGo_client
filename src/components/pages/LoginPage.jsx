import React from 'react';
import styled from 'styled-components';
import Layout from '@articles/Layout';
import { Column } from '@atoms/wrapper.style';
import SheGoLogo from '@assets/icon/SheGo_logo.svg';
import NLoginImage from '@assets/image/Naver_login.png';
import KLoginImage from '@assets/image/Kakao_login.png';
import { Link } from 'react-router-dom';
import { APP_HEADER_H, APP_BOTTOM_H, FOOTER_H } from '@constants/styleConst';

const Container = styled(Column)`
  width: 100%;
  height: calc(100vh - ${APP_HEADER_H} - ${APP_BOTTOM_H} - ${FOOTER_H});
  align-items: center;
  justify-content: center;
`;

const LogoWrapper = styled('img')`
  height: 20vh;
  margin-top: 5vh;
`;

const ImageWrpper = styled('img')`
  width: 200px;
  margin-top: 20px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
`;

const LinkWrapper = styled('div')`
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
`;

const LoginPage = () => {
  return (
    <Layout>
      <Container>
        <Link to={'/main'}>
          <LogoWrapper src={SheGoLogo} />
        </Link>
        <ImageWrpper src={NLoginImage} />
        <ImageWrpper src={KLoginImage} />
        <LinkWrapper>다른 계정으로 로그인하기</LinkWrapper>
      </Container>
    </Layout>
  );
};

export default LoginPage;
