import { useState } from "react";
import { useDispatch } from "react-redux";

import { setStatusCar, setBrandCar, setModelCar, setYearCar, setFuelCar } from "../../redux/addCarSlice";
import s from "./Add.module.scss";

const Add = () => {
    const [open, setOpen] = useState(false);
    const [brand, setBrand] = useState("");
    const [model, setModel] = useState("");
    const [year, setYear] = useState("");
    const [fuel, setFuel] = useState("");
    const dispatch = useDispatch();

    const saveValues = (brand, model, year, fuel) => {
        if (brand.trim() && model.trim() && year.trim()) {
            dispatch(setStatusCar());
            dispatch(setBrandCar(brand));
            dispatch(setModelCar(model));
            dispatch(setYearCar(year));
            dispatch(setFuelCar(fuel));
        } else {
            alert("Не все поля заполнены!");
        }
    }

    return (
        <div className={s.add}>
            {!open
                ? <button className={s.btn} onClick={() => setOpen(true)}>Добавить машину</button>
                : (
                <div className={s.addCard}>
                    <h2>Моя машина</h2>
                    <div className={s.info}>
                        <input type="text" placeholder={"Марка"} value={brand} onChange={(event) => setBrand(event.target.value)}/>
                        <input type="text" placeholder={"Модель"} value={model} onChange={(event) => setModel(event.target.value)}/>
                        <input type="text" placeholder={"Год"} value={year} onChange={(event) => setYear(event.target.value)}/>
                        <select value={fuel} defaultValue={"бензин"} onChange={(event) => setFuel(event.target.value)}>
                            <option value="бензин">Бензин</option>
                            <option value="дизель">Дизель</option>
                            <option value="газ">Газ</option>
                        </select>
                    </div>
                    <div className={s.buttons}>
                        <button onClick={() => saveValues(brand, model, year, fuel) && setOpen(false)}>Добавить</button>
                        <button onClick={() => setOpen(false)}>Отмена</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Add;