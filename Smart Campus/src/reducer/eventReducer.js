export const scheduleState = {
  activities: [],
  category: "All",
  searchText: ""
};

export function scheduleReducer(scheduleState, action) {
  switch (action.type) {
    case "SET_ACTIVITIES":
      return {
        ...scheduleState,
        activities: action.payload
      };

    case "SET_CATEGORY":
      return {
        ...scheduleState,
        category: action.payload
      };

    case "RESET_CATEGORY":
      return {
        ...scheduleState,
        category: "All"
      };

    case "SET_SEARCH_TEXT":
      return {
        ...scheduleState,
        searchText: action.payload
      };

    case "ADD_BOOKMARK":
      return {
        ...scheduleState,
        activities: scheduleState.activities.map(activity =>
          activity.id === action.payload
            ? { ...activity, isFavourite: true }
            : activity
        )
      };

    case "REMOVE_BOOKMARK":
      return {
        ...scheduleState,
        activities: scheduleState.activities.map(activity =>
          activity.id === action.payload
            ? { ...activity, isFavourite: false }
            : activity
        )
      };

    default:
      return scheduleState;
  }
}
