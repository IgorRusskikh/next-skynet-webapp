import { Button } from "@/shared/ui/Button";
import Image from "next/image";
import styles from "./EmptyRequests.module.css";

interface Props {
  label: string;
  nextStep: () => void;
  orderPass: boolean;
}

const EmptyRequests = ({ label, nextStep, orderPass }: Props) => {
  return (
    <div className={styles.emptyRequests}>
      <div className={`${styles.container}`}>
        <div className={`${styles.icon}`}>
          <Image src="/empty-folder.png" fill alt="Empty " />
        </div>

        <p>{label}</p>

        {orderPass && <Button onClick={nextStep}>Заказать пропуск</Button>}
      </div>
    </div>
  );
};

export default EmptyRequests;
