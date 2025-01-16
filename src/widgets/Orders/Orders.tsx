import styles from "./Orders.module.css";

const Orders = () => {
  return (
    <div className={`${styles.orders}`}>
      <button className={`${styles.order}`}>
        <div className={`${styles.status}`}>
          <p>На рассмотрении</p>
        </div>

        <p className={`${styles.orderTitle}`}>Заявка на пропуск 04.12.2024</p>
      </button>
    </div>
  );
};

export default Orders;
