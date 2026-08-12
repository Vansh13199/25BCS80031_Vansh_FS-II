function FilterButtons({ updateSchedule }) {
  return (
    <div>
      <button
        onClick={() =>
          updateSchedule({ type: "RESET_CATEGORY" })
        }
      >
        All
      </button>

      <button
        onClick={() =>
          updateSchedule({
            type: "SET_CATEGORY",
            payload: "Technical"
          })
        }
      >
        Technical
      </button>

      <button
        onClick={() =>
          updateSchedule({
            type: "SET_CATEGORY",
            payload: "Cultural"
          })
        }
      >
        Cultural
      </button>

      <button
        onClick={() =>
          updateSchedule({
            type: "SET_CATEGORY",
            payload: "Sports"
          })
        }
      >
        Sports
      </button>

      <button
        onClick={() =>
          updateSchedule({
            type: "SET_CATEGORY",
            payload: "Workshop"
          })
        }
      >
        Workshop
      </button>
    </div>
  );
}

export default FilterButtons;