import styled from 'styled-components';

export const StyledSwiperContainer = styled.div`
  margin-top: 2rem;

  .slide {
    border: 2px solid grey;
  }

  .swiper {
    width: 50%;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
    padding: 2rem;
  }

  .slide-actions {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .slide-actions-buttons {
    width: 90%;
    margin-top: 0.5rem;
  }

  .view-button {
    margin-right: 0.5rem;
  }

  .slide-title {
    margin-bottom: 0.5rem;
  }
`;
