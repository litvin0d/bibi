import s from "./CarCard.module.scss";
import { Icon28CarOutline } from "@vkontakte/icons";

const CarCard = ({ car, money }) => {
    return (
        <div className={s.card}>
            <div className={s.title}>
                <Icon28CarOutline fill={"#2D81E0"} width={36} height={36} />
                <div>
                    <h2>{ car }</h2>
                    <p>Примерная стоимость обслуживания в год: <span>{ money }</span> руб.</p>
                </div>
            </div>
            <button onClick={() => alert("Купи пж подписочку :)")}>
                <p>Узнать больше</p>
            </button>
        </div>

    );
}

export default CarCard;