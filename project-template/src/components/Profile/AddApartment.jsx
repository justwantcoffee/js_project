import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function AddApartment() {
  const [formData, setFormData] = useState({
    businessType: "sell",
    complexType: "Апарт-комплекс",
    developer: "",
    finishing: "",
    header: "",
    houseType: "",
    kitchenArea: "",
    parking: "",
    price: "",
    realEstateType: "duplex",
    rooms: "",
    time: "",
    totalArea: "",
    underground: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "apartments"), {
        ...formData,
        kitchenArea: Number(formData.kitchenArea),
        price: Number(formData.price),
        rooms: Number(formData.rooms),
        time: Number(formData.time),
        totalArea: Number(formData.totalArea),
        //landlordId: "test_user",  - пока не настроено
        createdAt: serverTimestamp(),
      });
      alert("Квартира добавлена!");
      navigate("/");
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Не удалось добавить квартиру");
    }
  };

  return (
    <div className="container">
      <h2>Добавить квартиру</h2>
      <form onSubmit={handleSubmit}>
        <input name="developer" placeholder="Застройщик" onChange={handleChange} required />
        <input name="header" placeholder="Название ЖК" onChange={handleChange} required />
        <input name="houseType" placeholder="Тип дома" onChange={handleChange} required />
        <input name="finishing" placeholder="Отделка" onChange={handleChange} required />
        <input name="parking" placeholder="Парковка" onChange={handleChange} required />
        <input name="underground" placeholder="Метро" onChange={handleChange} required />
        
        <input name="price" type="number" placeholder="Цена (тыс ₽)" onChange={handleChange} required />
        <input name="kitchenArea" type="number" placeholder="Площадь кухни (м²)" onChange={handleChange} required />
        <input name="rooms" type="number" placeholder="Комнат" onChange={handleChange} required />
        <input name="totalArea" type="number" placeholder="Общая площадь (м²)" onChange={handleChange} required />
        <input name="time" type="number" placeholder="Срок сдачи (мес.)" onChange={handleChange} required />
        
        <select name="businessType" onChange={handleChange}>
          <option value="sell">Продажа</option>
          <option value="buy">Покупка</option>
        </select>

        <select name="realEstateType" onChange={handleChange}>
          <option value="duplex">Дуплекс</option>
          <option value="single-family">Семейный</option>
          <option value="apartment">Апартаменты</option>
        </select>

        <select name="complexType" onChange={handleChange}>
          <option value="Апарт-комплекс">Апарт-комплекс</option>
          <option value="Жилой комплекс">Жилой комплекс</option>
        </select>

        <button type="submit">Создать объявление</button>
      </form>
    </div>
  );
}
