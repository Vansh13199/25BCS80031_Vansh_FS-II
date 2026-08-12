import EventCard from "./EventCard";

function EventList({ activities, onUpdate }) {
  return (
    <div>
      {activities.map(activity => (
        <EventCard
          key={activity.id}
          activity={activity}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}

export default EventList;