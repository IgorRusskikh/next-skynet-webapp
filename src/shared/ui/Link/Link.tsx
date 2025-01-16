import Link, { LinkProps } from "next/link";

import { ReactNode } from "react";
import styles from "./Link.module.css";

interface Props extends LinkProps {
  className?: string;
  children?: ReactNode;
  target?: "_blank" | "_self" | "_parent" | "_top";
}

export default function CustomLink({
  href,
  children,
  className = "",
  ...props
}: Props) {
  return (
    <Link href={href} className={`${styles.link} ${className}`} {...props}>
      {children}
    </Link>
  );
}
