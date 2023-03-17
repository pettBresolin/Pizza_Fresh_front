import { HTMLAttributes } from "react";
import * as S from "./style";

type NavColumItemType = HTMLAttributes<HTMLDivElement>;

type NavColumItemTypeProps = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  active?: boolean;
} & NavColumItemType;

const NavColumnItem = ({
  icon,
  title,
  subtitle,
  active = false,
  ...props
}: NavColumItemTypeProps) => {
  return (
    <S.NavColumnItem active={active} {...props}>
      <S.NavColumnItemIcon>{icon}</S.NavColumnItemIcon>
      <div>
        <S.NavColumnItemDetailsTitle>{title}</S.NavColumnItemDetailsTitle>
        <S.NavColumnItemDetailsSub>{subtitle}</S.NavColumnItemDetailsSub>
      </div>
    </S.NavColumnItem>
  );
};

export default NavColumnItem;
