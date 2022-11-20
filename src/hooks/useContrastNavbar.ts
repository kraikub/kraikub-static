import { MutableRefObject, useState } from "react";
import { useEffect } from "react";
import { useNavbarControl } from "./useNavbarControl";

export const useContrastNavbar = (
  ref: MutableRefObject<Element | null>,
  color: string,
  overlayBackgroundColor: string,
) => {
  const { setColor, resetColor, setOverlayColor, color: currentColor, overlayColor } = useNavbarControl();
  const [isReset, setIsReset] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  function handleColorCalculation() {
    if (ref.current) {
      let pos = ref.current.getBoundingClientRect();
      // in view port
      if (pos.y <= 0 && pos.bottom > 0) {
        setIsReset(false)
        setActive(true);
        setColor(color);
        setOverlayColor(overlayBackgroundColor);
      }
      else {
        resetColor()
      }
    }
  }

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", handleColorCalculation);
    }
  }, [ref]);

  return active;
};
