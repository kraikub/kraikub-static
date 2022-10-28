import { MutableRefObject, useState } from "react";
import { useEffect } from "react";
import { useNavbarControl } from "./useNavbarControl";

export const useContrastNavbar = (
  ref: MutableRefObject<Element | null>,
  color: string
) => {
  const { color: navColor, setColor, resetColor } = useNavbarControl();
  const [isReset, setIsReset] = useState<boolean>();
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current) {
      window.addEventListener("scroll", () => {
        if (ref.current) {
          let pos = ref.current.getBoundingClientRect();
          // hit top border
          if (pos.y <= 0 && pos.bottom > 0) {
            setIsReset(false)
            setActive(true);
            setColor(color);
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
