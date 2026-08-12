import { useReducer, useState } from "react";

import Header from "./Header";
import FilterButtons from "./FilterButtons";
import SearchBar from "./SearchBar";
import EventList from "./EventList";
import StudentInfo from "./StudentInfo";

import {
  scheduleReducer,
  scheduleState as initialScheduleState
} from "../reducer/eventReducer";

const campusActivities = [
  {
    id: 1,
    title: "Orientation Day",
    category: "Technical",
    description:
      "Welcome students to the new semester with tech demos and campus tours.",
    isFavourite: false
  },
  {
    id: 2,
    title: "Cultural Night",
    category: "Cultural",
    description:
      "Celebrate diversity with music, dance, and food from around the campus.",
    isFavourite: false
  },
  {
    id: 3,
    title: "Inter-college Sports",
    category: "Sports",
    description:
      "Join friendly competitions in basketball, football, and athletics.",
    isFavourite: false
  }
];

function Dashboard() {
  const [scheduleState, scheduleDispatch] = useReducer(
    scheduleReducer,
    {
      ...initialScheduleState,
      activities: campusActivities
    }
  );

  const [showStudent, setShowStudent] = useState(true);

  const visibleActivities = scheduleState.activities.filter(item => {
    const categoryMatch =
      scheduleState.category === "All" ||
      item.category === scheduleState.category;

    const searchText = scheduleState.searchText.toLowerCase();

    const searchMatch =
      item.title.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText);

    return categoryMatch && searchMatch;
  });

  const bookmarkedCount = scheduleState.activities.filter(
    activity => activity.isFavourite
  ).length;

  return (
    <div>
      <Header savedCount={bookmarkedCount} />

      <FilterButtons updateSchedule={scheduleDispatch} />

      <SearchBar setSearch={scheduleDispatch} />

      <EventList
        activities={visibleActivities}
        onUpdate={scheduleDispatch}
      />

      <button
        onClick={() =>
          setShowStudent(!showStudent)
        }
      >
        Toggle Student Details
      </button>

      {showStudent && <StudentInfo />}
    </div>
  );
}

export default Dashboard;