import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  style?: object;
}

export const Button: FC<Props> = (props) => {
  return (
    <button style={props.style} className={props.className}>
      {props.children}
    </button>
  );
};
