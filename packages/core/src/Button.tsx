import { FC, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  style?: object;
}

export const Button: FC<Props> = (props) => {
  return (
    <button style={props.style} className={props.className}>
      {props.children} / 나는 core에서 react로 출력하고 있습니다.
    </button>
  );
};
