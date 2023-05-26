import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';
import { ITodo } from '../../types/todo.types';
import TodoTabletElement from './todo-tablet-element.component';
import { StyledSwiperContainer } from '../../containers/tablet/swiper.container.styled';
import { useGetAllTodos } from '../../../../utils/useTodos';

const TodoTabletInner = () => {
  const { data } = useGetAllTodos();
  const effect = 'coverflow'; // This property must remain in variable to avoid eslint error.

  return (
    <StyledSwiperContainer>
      <Swiper
        effect={effect}
        grabCursor
        centeredSlides
        slidesPerView={1}
        loop
        coverflowEffect={{
          depth: 50,
          modifier: 1,
          slideShadows: true
        }}
        pagination
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {data?.data.data.todos.map((todo: ITodo) => (
          <SwiperSlide key={todo.id} className="slide">
            <TodoTabletElement todo={todo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default TodoTabletInner;
