import React from "react";

const EventCard = React.memo(function EventCard({
  activity,
  onUpdate
}) {
  function toggleBookmark() {
    onUpdate({
      type: activity.isFavourite
        ? "REMOVE_BOOKMARK"
        : "ADD_BOOKMARK",
      payload: activity.id
    });
  }

  return (
    <div className="card">
      <h3>{activity.title}</h3>

      <p>Category: {activity.category}</p>

      <p>{activity.description}</p>

      <button onClick={toggleBookmark}>
        {activity.isFavourite
          ? "Remove Bookmark"
          : "Bookmark Event"}
      </button>
    </div>
  );
});

export default EventCard;