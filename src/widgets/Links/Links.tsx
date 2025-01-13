import CustomLink from "@/shared/ui/Link/Link";
import Image from "next/image";
import styles from "./Links.module.css";

const Links = () => {
  return (
    <div className={`${styles.links}`}>
      <InnerLinks />
      <OuterLinks />
    </div>
  );
};

export default Links;

const innerLinks = [
  {
    name: "Cash2Cash",
    link: "cash2cash",
  },
];

function InnerLinks() {
  return (
    <div className={`${styles.container}`}>
      {innerLinks.map(({ name, link }, inx) => (
        <CustomLink
          key={inx}
          href={link}
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

          <span>{name}</span>
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
