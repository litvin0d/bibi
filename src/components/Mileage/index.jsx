import { useState } from "react";
import { Icon28LocationOutline } from '@vkontakte/icons';

import s from "./Mileage.module.scss";

const Mileage = () => {
    const [isActive, setIsActive] = useState(false);
    const [mileage, setMileage] = useState("000000")

    return (
        <div className={s.mileage}>
            <Icon28LocationOutline fill={"#2D81E0"} onClick={() => setIsActive(!isActive)} className={s.icon} />
            {
                isActive
                    ? <input type="text" value={mileage} onChange={(event) => setMileage(event.target.value)} />
                    : <span>{/[0-9]/.test(mileage) ? mileage : alert("Пробег введён неверно")} км.</span>
            }
        </div>
    );
}

export default Mileage;