import { useMediaQuery } from 'react-responsive';

export const useDeviceType = (): {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
} => {
  const isMobile = useMediaQuery({ maxWidth: 425 });
  const isTablet = useMediaQuery({ minWidth: 425, maxWidth: 1444 });
  const isDesktop = useMediaQuery({ minWidth: 1444 });

  return { isMobile, isTablet, isDesktop };
};
