// actions
const SET_VISIBILITY = "visibility/set" as const;

type VisibilityAction = ReturnType<typeof setVisibility>;

// action creators
export const setVisibility = (type: VisibilityStrings) => ({
  type: SET_VISIBILITY,
  payload: {
    type
  }
});

// states
export type VisibilityStrings = "sidebar";
const initialState: VisibilityState = {
  sidebar: false
};
type VisibilityState = {
  sidebar: boolean;
};

// reducers
export default (state = initialState, action: VisibilityAction) => {
  const copied = { ...state };
  switch (action.type) {
    case SET_VISIBILITY:
      // action
      return copied;

    default:
      return copied;
  }
};
