import { Fragment } from "react";
import styles from "./Instruction.module.css";

const Instruction = () => {
  return (
    <div className={styles.instructionContainer}>
      <h2 className={styles.title}>Как создать заявку на операцию?</h2>

      <div className={`${styles.content}`}>
        <Wrapper
          step={1}
          instructions={[
            "На главном экране приложения выберете необходимую операцию (Купить/продать USDT, Cash2Cash, Платежи для ВЭД)",
          ]}
        />

        <InstructionImage src="step-1-image.png" />

        <Wrapper
          step={2}
          instructions={[
            "Допустим, выбираем Купить USDT.",
            "Первым шагом необходимо выбрать офис в Вашем городе (или другом удобном) для посещения.",
            "Если нет необходимого офиса, то нажмите кнопку «Свяжитесь с менеджером».",
          ]}
        />

        <InstructionImage src="step-2-image.png" />

        <Wrapper
          step={3}
          instructions={[
            "Следующим шагом необходимо выбрать валюту, из которой вы будете покупать USDT. На выбор три валюты: RUB, USD, EURO.",
            "Далее введите сумму, которую отдаёте из этой валюты. Например, 1.000,000 ₽. Приложение автоматически подсчитает, сколько вы получите в USDT.",
            "После ввода сумму нажмите «Запросить фикс», чтобы оставить заявку в соответствии с курсом на текущий момент.",
          ]}
        >
          <br />
          <p className={styles.minSum}>
            Минимальная сумма для заявки: 10.000 USDT
          </p>
        </Wrapper>

        <InstructionImage src="step-3-image.png" />

        <Wrapper
          step={3.2}
          instructions={[
            "Если Вы являетесь неверифицированным пользователем, то кнопка «Запросить фикс» будет недоступна. Вместо неё будет кнопка «Запросить верификацию».",
          ]}
        >
          <br />
          <p className={styles.defaultText}>
            Верификация необходима для дальнейших операций и безопасности сделки
            с обеих сторон. Её можно осуществить либо через нашего
            телеграм-бота, либо через личное посещение офиса.
          </p>
        </Wrapper>

        <InstructionImage src="step-3.2-image.png" />

        <Wrapper
          step={4}
          instructions={[
            "После создания заявки Вам будет доступен уникальный код сделки, который Вы можете либо скопировать, либо сделать скриншот.",
          ]}
        >
          <br />
          <p className={styles.defaultText}>
            Этот код является кодом безопасности, который вам продублирует в
            сообщении менеджер. Тем самым он подтвердит, что данный аккаунт
            является достоверным и не мошенническим.
          </p>
        </Wrapper>

        <InstructionImage src="step-4-image.png" />

        <Wrapper
          step={4.2}
          instructions={[
            "Если вы неверифицированный пользователь, то на последнем экране вы увидите информацию о том, что заявка создана так же и на верификацию.",
          ]}
        />

        <InstructionImage src="step-4.2-image.png" />

        <Wrapper
          step={5}
          instructions={[
            "В течении дня с Вами свяжется наш менеджер для дальнейшей работы по сделке.",
          ]}
        />

        <p className={styles.title}>Остались вопросы по приложению?</p>

        <Wrapper
          step={1}
          instructions={[
            "На главном экране выберете пункт меню «Связаться с поддержкой» и задайте интересующий Вас вопрос.",
          ]}
        />

        <InstructionImage src="questions-1-image.png" />

        <p className={styles.title}>
          По какому курсу Вы покупаете/продаете USDT?
        </p>

        <Wrapper
          step={1}
          instructions={[
            "На главном экране Вы можете увидеть окно с текущим курсом валют.",
            "Вы можете выбрать для просмотра одну из трёх валют: RUB, USD, EURO.",
          ]}
        />

        <InstructionImage src="rate-1-image.png" />
      </div>
    </div>
  );
};

interface IWrapperProps {
  step: number;
  instructions: string[];
  children?: React.ReactNode;
}

function Wrapper({ step, instructions, children }: IWrapperProps) {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.step}>Шаг {step}:</div>

      <ul className={styles.instructions}>
        {instructions.map((instruction, inx) => (
          <Fragment key={inx}>
            {inx > 0 && <br />}
            <li className={styles.instruction}>{instruction}</li>
          </Fragment>
        ))}
      </ul>

      {children}
    </div>
  );
}

interface IInstructionImageProps {
  src: string;
}

function InstructionImage({ src }: IInstructionImageProps) {
  return (
    <div className={`${styles.instructionImage}`}>
      <img src={`/instruction/${src}`} alt="instruction" />
    </div>
  );
}

export default Instruction;
