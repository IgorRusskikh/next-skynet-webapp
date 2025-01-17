"use client";

import CustomLink from "@/shared/ui/Link/Link";
import Image from "next/image";
import styles from "./Links.module.css";
import { usePreloader } from "@/shared/contexts/PreloaderContext";
import { useRouter } from "next/navigation";

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
  {
    name: "Платежи для ВЭД",
    link: "fta",
  },
  {
    name: "Мои сделки",
    link: "transactions",
  },
  {
    name: "Заказать пропуск",
    link: "order-pass",
  },
];

function InnerLinks() {
  const router = useRouter();

  const { setIsLoaded, setPreloaderTimeout } = usePreloader();

  const handleClick = (
    evt: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    evt.preventDefault();
    setIsLoaded(false);
    setPreloaderTimeout(1000);
    setTimeout(() => router.push(link), 500);
  };

  return (
    <div className={`${styles.container}`}>
      {innerLinks.map(({ name, link }, inx) => (
        <CustomLink
          key={inx}
          href={link}
          onClick={(evt) => handleClick(evt, link)}
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

const outerLinks = [
  {
    name: "FAQ",
    link: "faq",
    inner: true,
  },
  {
    name: "Получить консультацию",
    link: "get-consultation",
    inner: true,
  },
  {
    name: "Инструкция",
    link: "instruction",
    inner: true,
  },
  {
    name: "Сайт",
    link: "https://skynetgroup.ru/ru",
    inner: false,
  },
  {
    name: "Телеграм канал",
    link: "https://t.me/skynet_group",
    inner: false,
  },
  {
    name: "Связаться с поддержкой",
    link: "https://t.me/skynet_group",
    inner: false,
  },
];

function OuterLinks() {
  const router = useRouter();

  const { setIsLoaded, setPreloaderTimeout } = usePreloader();

  const handleClick = (
    evt: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    evt.preventDefault();
    setIsLoaded(false);
    setPreloaderTimeout(1000);
    setTimeout(() => router.push(link), 400);
  };

  return (
    <div className={`${styles.container}`}>
      {outerLinks.map(({ name, link, inner }, inx) => (
        <CustomLink
          key={inx}
          href={link}
          className={`${styles.link} ${inx > 0 ? styles.linkBorder : ""}`}
          target={inner ? undefined : "_blank"}
          onClick={(evt) => (inner ? handleClick(evt, link) : null)}
        >
          {name}
        </CustomLink>
      ))}
    </div>
  );
}
