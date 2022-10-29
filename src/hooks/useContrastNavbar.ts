import { MutableRefObject, useState } from "react";
import { useEffect } from "react";
import { useNavbarControl } from "./useNavbarControl";

export const useContrastNavbar = (
  ref: MutableRefObject<Element | null>,
  color: string,
  overlayBackgroundColor: string,
) => {
  const { setColor, resetColor, setOverlayColor } = useNavbarControl();
  const [isReset, setIsReset] = useState<boolean>();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", () => {
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
            if (!isReset) {
              setIsReset(true)
              resetColor();
            }
          }
        }
      });
    }
  }, [ref]);

  return active;
};
