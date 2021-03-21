// actions
const ADD_CLUB = "club/add" as const;

// action creators

type ClubAction = ReturnType<typeof addClub>;

export const addClub = (val: clubAddType) => ({
  type: ADD_CLUB,
  payload: {
    club: {
      categories: val.categories,
      clubName: val.clubName
    }
  }
});

// state
const initialState: Array<clubAddType> = [];
// reducers

export default (state = initialState, action: ClubAction) => {
  const copiedState = [...state];
  // { categories: "", clubName: "" }
  switch (action.type) {
    case ADD_CLUB:
      if (
        action.payload.club.clubName !==
        copiedState.find((club) => club.clubName)?.clubName
      )
        copiedState.push(action.payload.club);
      return copiedState;
    default:
      return copiedState;
  }
};
