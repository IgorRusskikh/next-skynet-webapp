import CustomLink from "@/shared/ui/Link/Link";
import Image from "next/image";
import styles from "./Links.module.css";

export default function Links() {
  return (
    <div className={`${styles.links}`}>
      <InnerLinks />
      <OuterLinks />
    </div>
  );
}

function InnerLinks() {
  return (
    <div className={`${styles.container}`}>
      {Array.from({ length: 4 }).map((_, inx) => (
        <CustomLink
          key={inx}
          href=""
          className={`${styles.link} ${inx > 0 ? styles.linkBorder : ""}`}
        >
          <div className={`${styles.icon}`}>
            <Image
              src="/inner-links/wallet.png"
              fill
              alt="Wallet"
              className="object-contain"
            />
          </div>

          <span>Cash2Cash</span>
        </CustomLink>
      ))}
    </div>
  );
}

function OuterLinks() {
  return (
    <div className={`${styles.container}`}>
      {Array.from({ length: 4 }).map((_, inx) => (
        <CustomLink
          key={inx}
          href=""
          className={`${styles.link} ${inx > 0 ? styles.linkBorder : ""}`}
        >
          Получить консультацию
        </CustomLink>
      ))}
    </div>
  );
}
