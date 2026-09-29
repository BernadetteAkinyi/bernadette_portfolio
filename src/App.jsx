import { useEffect, useState } from "react";
import FlipBook from "./components/FlipBook";
import ScrollLayout from "./ScrollLayout";

// Custom hook: returns true when the screen is at least 900px wide.
// matchMedia is the same thing CSS media queries use, but readable from JavaScript.
function useIsDesktop() {
  const query = "(min-width: 900px)";
  const [isDesktop, setIsDesktop] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = (e) => setIsDesktop(e.matches); // fires when the window is resized across 900px
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange); // cleanup when the component unmounts
  }, []);

  return isDesktop;
}

export default function App() {
  const isDesktop = useIsDesktop();
  return isDesktop ? <FlipBook /> : <ScrollLayout />;
}