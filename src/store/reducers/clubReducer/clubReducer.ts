import { Dispatch } from "react";
import axios from "../../../config/axios/axios";

// actions
const ADD_CLUB = "club/add" as const;
const GET_CLUB = "club/get" as const;
const LOADING = "club/loading" as const;
const REMOVE_CLUB = "club/remove" as const;
// action creators

type ClubAction =
  | ReturnType<typeof getClub>
  | ReturnType<typeof addClub>
  | ReturnType<typeof loadingClub>
  | ReturnType<typeof removeClub>;

const loadingClub = () => ({
  type: LOADING
});

const addClub = (val: clubType) => ({
  type: ADD_CLUB,
  payload: {
    club: {
      categories: val.categories,
      clubName: val.clubName
    }
  }
});
const getClub = (val: Array<clubType>) => ({
  type: GET_CLUB,
  payload: {
    clubs: val
  }
});
const removeClub = (id: string) => ({
  type: REMOVE_CLUB,
  payload: {
    clubId: id
  }
});
export const asyncGetClub = () => async (
  dispatch: Dispatch<
    ReturnType<typeof getClub> | ReturnType<typeof loadingClub>
  >
) => {
  dispatch(loadingClub());
  try {
    const value: Array<clubType> = await axios
      .get("/member/getClubs")
      // eslint-disable-next-line no-underscore-dangle
      .then((res) => res.data._embedded.clubList);
    dispatch(getClub(value));
  } catch (err) {
    alert("asyncGetClub 에러");
  }
  dispatch(loadingClub());
};
export const asyncPostClub = (val: clubType) => async (
  dispatch: Dispatch<
    ReturnType<typeof addClub> | ReturnType<typeof loadingClub>
  >
) => {
  dispatch(loadingClub());
  try {
    await axios.post("/club, val").then((res) => res.data);
    dispatch(addClub(val));
  } catch (err) {
    alert("asyncAddClub  에러");
  }
  dispatch(loadingClub());
};
export const asyncRemoveClub = (id: string) => async (
  dispatch: Dispatch<
    ReturnType<typeof removeClub> | ReturnType<typeof loadingClub>
  >
) => {
  dispatch(loadingClub());
  try {
    await axios
      .delete(`/club/${id}`)
      .then((res) =>
        res.data.success
          ? dispatch(removeClub(id))
          : new Error("clubReducer 83")
      );
  } catch (err) {
    alert("asyncRemoveClub 에러");
  }
  dispatch(loadingClub());
};
// state
const initialState: { loading: boolean; clubs: Array<clubType> } = {
  loading: false,
  clubs: []
};
// reducers
export default (state = initialState, action: ClubAction) => {
  const copiedState = { loading: state.loading, clubs: [...state.clubs] };
  switch (action.type) {
    case LOADING:
      return copiedState;
    case ADD_CLUB:
      copiedState.clubs.push(action.payload.club);
      return {
        loading: copiedState.loading,
        clubs: copiedState.clubs.filter(
          (v, i, a) => i === a.findIndex((va) => va.clubName === v.clubName)
        )
      };
    case GET_CLUB:
      action.payload.clubs.forEach((v) => copiedState.clubs.push(v));
      return copiedState;
    case REMOVE_CLUB:
      return {
        loading: copiedState.loading,
        clubs: copiedState.clubs.filter(
          (v) => action.payload.clubId !== v.clubId?.toString()
        )
      };
    default:
      return copiedState;
  }
};
