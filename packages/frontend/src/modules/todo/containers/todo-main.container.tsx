import React from 'react';
import { useDeviceType } from '../../../utils/useDeviceType';
import TodoDesktopInner from '../components/desktop/todoDesktopInner.component';
import NewButton from '../components/new-button.component';
import TodoTabletInner from '../components/tablet/todo-tablet-inner.component';
import TodoMobileInner from '../components/mobile/todo-mobile-inner.component';

const TodoMainContainer = () => {
  const { isMobile, isTablet, isDesktop } = useDeviceType();

  return (
    <>
      {isMobile && (
        <>
          <TodoMobileInner />
          <NewButton />
        </>
      )}
      {isTablet && (
        <>
          <TodoTabletInner />
          <NewButton />
        </>
      )}
      {isDesktop && (
        <>
          <TodoDesktopInner />
          <NewButton />
        </>
      )}
    </>
  );
};

export default TodoMainContainer;
