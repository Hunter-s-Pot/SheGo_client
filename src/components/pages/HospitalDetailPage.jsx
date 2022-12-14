import React, { useState } from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { APP_MAX_W, APP_HEADER_H, APP_BOTTOM_H, FOOTER_H } from '@constants/styleConst';
import { Items as items } from '@mock/items.js';
import SearchLayout from '@articles/SearchLayout';
import {
  MdOutlineLocalHospital,
  MdFemale,
  MdOutlineCall,
  MdOutlineNavigation,
  MdOutlineHome,
} from 'react-icons/md';
import { AiOutlineYoutube } from 'react-icons/ai';
import { TbSquareAsterisk } from 'react-icons/tb';

const Container = styled('div')`
  width: 100%;
  height: calc(100vh - ${APP_HEADER_H} - ${APP_BOTTOM_H} - ${FOOTER_H} - 3rem);
`;

const HospitalContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const HospitalImage = styled('img')`
  width: 200px;
  height: 200px;
  border-radius: 20%;
`;

const HospitalInfoContainer = styled('div')`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5%;
  gap: 10px;
`;

const Title = styled('span')`
  font-size: 20px;
  font-weight: 700;
`;

const Topic = styled('span')`
  font-size: 13px;
`;

const Extra = styled('div')`
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ButtonWrapper = styled('div')`
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 10px solid lightgray;
`;

const Button = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 800;
  gap: 5px;
`;

const CategoryButtonWrapper = styled('div')`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const CategoryButton = styled('button')`
  font-size: 20px;
  font-weight: 600;
  height: 100%;
  display: flex;
  align-items: center;
  border-bottom: ${({ isActive }) =>
    isActive ? `3px solid ${colors.bgPrimary}` : null};
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.bgPrimary : colors.bgBlack)};
`;

const ContentContainer = styled('div')`
  width: 100%;
  margin: 5%;
`

const ContentTitle = styled('span')`
  font-size: 15px;
  font-weight: 700;
`

const RiskWrapper = styled('div')`
  position: fixed;
  bottom: ${APP_BOTTOM_H};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 3rem;
  width: ${APP_MAX_W};
  z-index: 99;
  padding: 0 15px;
  background-color: ${colors.bgWhite};
  gap: 10px;
  border-top: 1px solid ${colors.bgSecondary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const HospitalDetailPage = () => {
  const location = useLocation();
  const parsed = parse(location.search);
  const dataId = parsed.id;
  const data = items.filter((item) => item.id === dataId)[0] || false;

  const [tab, setTab] = useState('???');

  return (
    <SearchLayout>
      <Container>
        <HospitalContainer>
          <HospitalImage src={data.image} />
          <HospitalInfoContainer>
            <Title>{data.title}</Title>
            <Topic>{data.topic}</Topic>
            <Extra>
              <MdFemale size="20px" />
              ????????? {data.doctor === 'only' ? '??????' : `${data.doctor}???`}
            </Extra>
            <Extra>
              <MdOutlineLocalHospital size="20px" />
              ?????????????????????{' '}
              {data.doctor === 'only' ? '??????' : `${data.doctor}???`}
            </Extra>
            <Extra>??????: ???????????????</Extra>
          </HospitalInfoContainer>
        </HospitalContainer>
        <ButtonWrapper>
          <Button>
            <MdOutlineCall size="40px" />
            ??????
          </Button>
          <Button>
            <MdOutlineNavigation size="40px" />
            ???????????????
          </Button>
          <Button>
            <MdOutlineHome size="40px" />
            ????????????
          </Button>
          <Button>
            <AiOutlineYoutube size="40px" />
            ?????????
          </Button>
        </ButtonWrapper>
        <CategoryButtonWrapper>
          <CategoryButton
            isActive={tab === '???'}
            value="???"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            ???
          </CategoryButton>
          <CategoryButton
            isActive={tab === '??????'}
            value="??????"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            ??????
          </CategoryButton>
          <CategoryButton
            isActive={tab === '??????'}
            value="??????"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            ??????
          </CategoryButton>
          <CategoryButton
            isActive={tab === '??????'}
            value="??????"
            onClick={(newTab) => {
              setTab(newTab.target.value);
            }}
          >
            ??????
          </CategoryButton>
        </CategoryButtonWrapper>
        <ContentContainer>
          {tab === '???' ? (
            <ContentTitle>???</ContentTitle>
          ) : tab === '??????' ? (
            <ContentTitle>??????</ContentTitle>
          ) : tab === '??????' ? (
            <ContentTitle>??????</ContentTitle>
          ) : tab === '??????' ? (
            <ContentTitle>??????</ContentTitle>
          ) : null}
        </ContentContainer>
        <RiskWrapper>
          <TbSquareAsterisk />
          *???????????? *???????????? *????????????
        </RiskWrapper>
      </Container>
    </SearchLayout>
  );
};

export default HospitalDetailPage;
