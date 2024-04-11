import { useCallback, useState } from 'react';

export default function useMenu() {
  const [isOpenMenu, setIsOpen] = useState(false);
  const openMenu = useCallback(() => setIsOpen(true), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return { isOpenMenu, openMenu, closeMenu };
}
