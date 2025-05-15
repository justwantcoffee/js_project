import React, { useState, useEffect, useRef } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // путь к файлу firebase.js
import styles from "../../styles/ContentPage/filters.module.css";

const Filters = ({ filters = {}, onApply, visible }) => {
  const [localFilters, setLocalFilters] = useState({
    businessType: filters.businessType || "buy",
    realEstateType: filters.realEstateType || null,
    rooms: filters.rooms || null,
    priceType: filters.priceType || "object",
    priceFrom: filters.priceFrom || "",
    priceTo: filters.priceTo || "",
    areaFrom: filters.areaFrom || "",
    areaTo: filters.areaTo || "",
    kitchenSize: filters.kitchenSize || null,
  });

  const [offers, setOffers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "apartments"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setOffers(data);
      } catch (error) {
        console.error("Ошибка загрузки офферов:", error);
      }
    };
    fetchOffers();
  }, []);

  useEffect(() => {
    if (visible) {
      setLocalFilters(filters);
    }
  }, [visible, filters]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getUniqueSorted = (key) =>
    Array.from(new Set(offers.map((o) => o[key]))).filter(Boolean).sort();

  const realEstateOptions = getUniqueSorted("realEstateType").map((value) => ({
    value,
    label: value.charAt(0).toUpperCase() + value.slice(1).replace("-", " "),
  }));

  const roomOptions = getUniqueSorted("rooms");
  const kitchenOptions = getUniqueSorted("kitchenArea");

  const PRICE_TYPES = {
    Object: "object",
    KM2: "km2",
    Mortgage: "mortgage",
  };

  const priceButtons = [
    { label: "For the object", value: PRICE_TYPES.Object },
    { label: "For km²", value: PRICE_TYPES.KM2 },
    { label: "Mortgage", value: PRICE_TYPES.Mortgage },
  ];

  const handleToggle = (key, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? null : value,
    }));
  };

  const handleInputChange = (event) => {
    setLocalFilters({
      ...localFilters,
      [event.target.name]: event.target.value,
    });
  };

  const handleSelect = (value) => {
    setLocalFilters((prev) => ({ ...prev, realEstateType: value }));
    setDropdownOpen(false);
  };

  return (
    <div className={styles.filters}>
      {/* Тип бизнеса */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Type of Business</label>
        <div className={styles.toggleGroup}>
          <button
            className={localFilters.businessType === "buy" ? styles.active : ""}
            onClick={() => handleToggle("businessType", "buy")}
          >
            Buy
          </button>
          <button
            className={localFilters.businessType === "sell" ? styles.active : ""}
            onClick={() => handleToggle("businessType", "sell")}
          >
            Sell
          </button>
        </div>
      </div>

      {/* Тип недвижимости */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Type of Real Estate</label>
        <div className={styles.dropdownContainer} ref={dropdownRef}>
          <button
            className={styles.dropdownButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {realEstateOptions.find(
              (opt) => opt.value === localFilters.realEstateType
            )?.label || "Select type"}
          </button>
          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              {realEstateOptions.map((option) => (
                <li
                  key={option.value}
                  className={styles.dropdownItem}
                  onClick={() => handleSelect(option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Количество комнат */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Amount of rooms</label>
        <div className={styles.toggleGroup}>
          {roomOptions.map((room) => (
            <button
              key={room}
              className={localFilters.rooms === room ? styles.active : ""}
              onClick={() => handleToggle("rooms", room)}
            >
              {room}
            </button>
          ))}
        </div>
      </div>

      {/* Цена */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Price</label>
        <div className={styles.toggleGroup}>
          {priceButtons.map(({ label, value }) => (
            <button
              key={value}
              className={localFilters.priceType === value ? styles.active : ""}
              onClick={() => handleToggle("priceType", value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Общая площадь */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Total area</label>
        <div className={styles.rangeGroup}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              name="areaFrom"
              placeholder="Starting at"
              value={localFilters.areaFrom || ""}
              onChange={handleInputChange}
            />
            <span className={styles.meters}>m²</span>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              name="areaTo"
              placeholder="Up to"
              value={localFilters.areaTo || ""}
              onChange={handleInputChange}
            />
            <span>m²</span>
          </div>
        </div>
      </div>

      {/* Площадь кухни */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Kitchen Area</label>
        <div className={styles.kitchenSizeRow}>
          {kitchenOptions.map((size) => (
            <button
              key={size}
              className={localFilters.kitchenSize === size ? styles.active : ""}
              onClick={() => handleToggle("kitchenSize", size)}
            >
              from {size} m
            </button>
          ))}
        </div>
      </div>

      <button
        className={styles.applyButton}
        onClick={() => onApply(localFilters)}
      >
        Apply
      </button>
    </div>
  );
};

export default Filters;
