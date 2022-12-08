import React from 'react';
import styled from 'styled-components';
import * as colors from '@styles/colors';
import { APP_MAX_W, APP_BOTTOM_H } from '@constants/styleConst';
import { Link } from 'react-router-dom';
import HomeImage from '@assets/image/home.svg';
import SearchImage from '@assets/image/search.svg';
import PeopleImage from '@assets/image/people.svg';
import CalendarImage from '@assets/image/calendar.svg';
import UserImage from '@assets/image/user.svg';

const Container = styled('div')`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: ${APP_MAX_W};
  height: ${APP_BOTTOM_H};
  bottom: 0;
  background-color: ${colors.primary70};
  z-index: 999;
  border-top: 1px solid ${colors.primary35};
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3px;
`;
const EmojiButton = styled('img')`
  width: 30px;
`;

const TextWrapper = styled('span')`
  color: ${colors.primary35};
`;

const Bottom = () => {
  return (
    <Container>
      <Link to={'/main'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={HomeImage} />
          <TextWrapper>홈</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/search'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={SearchImage} />
          <TextWrapper>검색</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/community'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={PeopleImage} />
          <TextWrapper>커뮤니티</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/calendar'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={CalendarImage} />
          <TextWrapper>캘린더</TextWrapper>
        </ButtonWrapper>
      </Link>
      <Link to={'/mypage'} style={{ textDecoration: 'none' }}>
        <ButtonWrapper>
          <EmojiButton src={UserImage} />
          <TextWrapper>마이페이지</TextWrapper>
        </ButtonWrapper>
      </Link>
    </Container>
  );
};

export default Bottom;