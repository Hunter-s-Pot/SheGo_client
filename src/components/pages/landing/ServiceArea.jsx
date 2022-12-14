import React, { forwardRef } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import Anchor from '@atoms/Anchor';
import { Row, Column } from '@atoms/wrapper.style';
import { lg, sm } from '@styles/GlobalStyle';
import service1Img from '@assets/image/service1.png';
import service2Img from '@assets/image/service2.png';
import service3Img from '@assets/image/service3.png';
import service4Img from '@assets/image/service4.png';
import service5Img from '@assets/image/service5.png';
import service6Img from '@assets/image/service6.png';
import service7Img from '@assets/image/service7.png';
import service8Img from '@assets/image/service8.png';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const TitleWrapper = styled(Column)`
  width: 100%;
  height: 100%;
  background-color: ${colors.primary35};
  align-items: center;
  padding: 20vh 0;
`;

const Title = styled('div')`
  font-weight: 700;
  font-size: 36px;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${colors.primary20};
  margin-bottom: 30px;

  ${sm`
    font-size: 27px;
    `};
`;

const SubTitle = styled('div')`
  font-weight: 400;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.5px;
  text-align: center;
  color: ${colors.textPrimary};

  ${sm`
    font-size: 27px;
    `}
`;

const ServiceSection = styled(Row)`
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30vh;
  background-color: ${(props) => props.backgroundColor};

  ${lg`
        padding: 10vh;
    `}
`;

const ServiceImgWrapper = styled('div')`
  width: 40%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ServiceImg = styled('img')`
  height: 100%;
  border: 5px solid black;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 20px 20px 8px;
`;

const ServiceContentWrapper = styled(Column)`
  width: 40%;
  gap: 20px;
`;

const ServiceTitleNum = styled('span')`
  font-size: 30px;
  font-weight: 700;
  color: ${colors.bgPrimary};
`;

const ServiceTitle = styled('span')`
  font-size: 24px;
  line-height: 130%;
  letter-spacing: 0.511785px;

  ${sm`
    font-size: 20px;
  `}
`;

const ServiceTitleBold = styled(ServiceTitle)`
  font-size: 36px;
  font-weight: 700;

  ${sm`
    font-size: 36px;
  `}
`;

const ServiceArea = forwardRef((props, ref) => {
  return (
    <Container>
      <Anchor ref={ref} />
      <TitleWrapper>
        <Title>?????? ???????????? ????????????!</Title>
        <SubTitle>
          ??????????????? ????????? ?????? ????????? ?????? ??????????????? ?????? ?????????
        </SubTitle>
      </TitleWrapper>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>01.</ServiceTitleNum>
          <ServiceTitleBold>SHEGO</ServiceTitleBold>
          <ServiceTitle>????????? ?????? ?????? ?????? ?????????</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service1Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>02.</ServiceTitleNum>
          <ServiceTitleBold>?????? ??????</ServiceTitleBold>
          <ServiceTitle>
            ??? ?????? ?????? ????????? ??????<br/> ????????? ??????????????????.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service2Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>03.</ServiceTitleNum>
          <ServiceTitleBold>?????? ????????????</ServiceTitleBold>
          <ServiceTitle>
            ?????? ????????? ????????? <br />??? ?????? ??????????????????.
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service3Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>04.</ServiceTitleNum>
          <ServiceTitleBold>?????? ?????? ??????</ServiceTitleBold>
          <ServiceTitle>??? ?????? ????????? ??? ?????? ?????????</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service4Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>05.</ServiceTitleNum>
          <ServiceTitleBold>????????? ??????</ServiceTitleBold>
          <ServiceTitle>
            ????????? ??? ?????? ?????? ??????
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service5Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>06.</ServiceTitleNum>
          <ServiceTitleBold>????????????</ServiceTitleBold>
          <ServiceTitle>
            ?????? ?????? ????????? ????????? ?????????
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service6Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection>
        <ServiceContentWrapper>
          <ServiceTitleNum>07.</ServiceTitleNum>
          <ServiceTitleBold>?????? ?????? ?????????</ServiceTitleBold>
          <ServiceTitle>
            ?????? ???????????? ?????? ???????????? <br/>????????? ??? ?????? ?????????
          </ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service7Img} />
        </ServiceImgWrapper>
      </ServiceSection>
      <ServiceSection backgroundColor={colors.primary15}>
        <ServiceContentWrapper>
          <ServiceTitleNum>08.</ServiceTitleNum>
          <ServiceTitleBold>?????????</ServiceTitleBold>
          <ServiceTitle>????????? ?????? ????????? ????????? ??????</ServiceTitle>
        </ServiceContentWrapper>
        <ServiceImgWrapper>
          <ServiceImg src={service8Img} />
        </ServiceImgWrapper>
      </ServiceSection>
    </Container>
  );
});

export default ServiceArea;
