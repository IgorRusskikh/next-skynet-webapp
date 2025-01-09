import { HTMLAttributes } from "react";
import Link from "next/link";
import styles from "./Link.module.css";

interface Props extends HTMLAttributes<HTMLLinkElement> {
  href: string;
}

export default function CustomLink({
  href,
  children,
  className,
  ...props
}: Props) {
  return (
    <Link href={href} className={`${styles.link} ${className}`}>
      {children}
    </Link>
  );
}
