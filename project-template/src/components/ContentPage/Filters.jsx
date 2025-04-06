import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/filters.module.css";

const Filters = ({ filters = {}, onApply, visible }) => {
  const [localFilters, setLocalFilters] = useState({
    businessType: filters.businessType || "buy",
    realEstateType: filters.realEstateType || "single-family",
    rooms: filters.rooms || null,
    priceType: filters.priceType || "object",
    priceFrom: filters.priceFrom || "",
    priceTo: filters.priceTo || "",
    areaFrom: filters.areaFrom || "",
    areaTo: filters.areaTo || "",
    kitchenSize: filters.kitchenSize || null,
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Сбрасываем локальные фильтры к ранее применённым при открытии
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

  const realEstateOptions = [
    { value: "single-family", label: "Single-family home" },
    { value: "apartment", label: "Apartment" },
    { value: "townhouse", label: "Townhouse" },
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

  const PRICE_TYPES = {
    Object: 'object',
    KM2: 'km2',
    Mortgage: 'mortgage',
  }

  const priceButtons = [
    { label: "For the object", value: PRICE_TYPES.Object },
    { label: "For km²", value: PRICE_TYPES.KM2 },
    { label: "Mortgage", value: PRICE_TYPES.Mortgage },
  ];

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
            )?.label}
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
          {["Studio", "1", "2", "3", "4"].map((room) => (
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

      {/* Общая площадь (Total area) */}
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

      {/* Площадь кухни (Kitchen area) */}
      <div className={styles.filterRow}>
        <label className={styles.filterLabel}>Kitchen Area</label>
        <div className={styles.kitchenSizeRow}>
          {[6, 7, 8, 9, 10, 12, 15].map((size) => (
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
