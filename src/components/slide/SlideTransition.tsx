import React from "react";
import { Transition } from "react-transition-group";

// components
import Slide from "./Slide";

// transition setting
const duration: number = 500;
const defaultStyle: any = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: any = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const SlideTransition = ({ loading }: any) => {
  return (
    <Transition in={!loading} timeout={2000}>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <Slide />
        </div>
      )}
    </Transition>
  );
};

export default SlideTransition;
