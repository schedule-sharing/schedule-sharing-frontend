import { Dispatch } from "react";
import axios from "../../../config/axios/axios";

// actions
const ADD_CLUB = <const>"club/add";
const GET_CLUB = <const>"club/get";
const LOADING = <const>"club/loading";
const REMOVE_CLUB = <const>"club/remove";
const SELECT_CLUB = <const>"club/select";
const MODIFY_CLUB = <const>"club/modify";

// action type
type ClubAction =
  | ReturnType<typeof getClub>
  | ReturnType<typeof addClub>
  | ReturnType<typeof loadingClub>
  | ReturnType<typeof removeClub>
  | ReturnType<typeof selectClub>
  | ReturnType<typeof modifyClub>;
// action creators
const loadingClub = () => ({
  type: LOADING
});

const addClub = (val: Required<clubType>) => ({
  type: ADD_CLUB,
  payload: {
    club: {
      categories: val.categories,
      clubName: val.clubName,
      clubId: val.clubId
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
const modifyClub = (id: string, val: { clubName: string; categories: string }) => ({
  type: MODIFY_CLUB,
  payload: {
    clubId: id,
    val: {
      clubName: val.clubName,
      categories: val.categories
    }
  }
});
export const selectClub = (id: string) => ({
  type: SELECT_CLUB,
  payload: {
    clubId: id
  }
});
export const asyncGetClub = () => async (dispatch: Dispatch<ReturnType<typeof getClub> | ReturnType<typeof loadingClub>>) => {
  dispatch(loadingClub());
  try {
    let value: Array<clubType> = [];
    const data = await axios.get("/member/getClubs").then((res) => {
      if (res.status !== 200) throw new Error();
      return res.data;
    });
    if (data._embedded) value = await data._embedded.clubList;
    dispatch(getClub(value));
  } catch (err) {
    alert("asyncGetClub 에러");
  } finally {
    dispatch(loadingClub());
  }
};
export const asyncPostClub = (val: Omit<clubType, "clubId">) => async (
  dispatch: Dispatch<ReturnType<typeof addClub> | ReturnType<typeof loadingClub>>
) => {
  dispatch(loadingClub());
  try {
    await axios
      .post("/club", val)
      .then((res) => res.data)
      .then((data) => {
        dispatch(
          addClub({
            clubId: data.clubId,
            clubName: data.clubName,
            categories: data.categories
          })
        );
      });
    alert("asyncAddClub요청 성공");
  } catch (err) {
    alert("asyncAddClub  에러");
  } finally {
    dispatch(loadingClub());
  }
};
export const asyncRemoveClub = (id: string) => async (dispatch: Dispatch<ReturnType<typeof removeClub> | ReturnType<typeof loadingClub>>) => {
  dispatch(loadingClub());
  try {
    await axios.delete(`/club/${id}`).then((res) => (res.data.success ? dispatch(removeClub(id)) : new Error("clubReducer")));
    return true;
  } catch (err) {
    alert("asyncRemoveClub 에러");
    return false;
  } finally {
    dispatch(loadingClub());
  }
};
export const asyncModifyClub = (id: string, val: Omit<clubType, "clubId">) => async (
  dispatch: Dispatch<ReturnType<typeof loadingClub> | ReturnType<typeof modifyClub>>
) => {
  dispatch(loadingClub());
  try {
    await axios
      .put(`/club/${id}`, {
        clubName: val.clubName,
        categories: val.categories
      })
      .then((res) => {
        dispatch(
          modifyClub(id, {
            clubName: res.data.clubName,
            categories: res.data.categories
          })
        );
      });
  } catch (err) {
    //
  } finally {
    dispatch(loadingClub());
  }
};
type clubType = {
  clubName: string;
  categories: string;
  clubId: string;
};
const initialState: {
  loading: boolean;
  clubs: Array<clubType>;
  currentClub: clubType;
} = {
  loading: false,
  clubs: [],
  currentClub: { categories: "", clubName: "", clubId: "" }
};
// reducers
export default (state = initialState, action: ClubAction) => {
  const copiedState = { ...state, clubs: [...state.clubs] };
  switch (action.type) {
    case LOADING:
      copiedState.loading = !state.loading;
      return copiedState;
    case ADD_CLUB:
      copiedState.clubs.push(action.payload.club);
      return { ...copiedState };
    case SELECT_CLUB:
      Object.assign(
        copiedState.currentClub,
        copiedState.clubs.find((v) => v.clubId === action.payload.clubId)
      );
      return copiedState;
    case GET_CLUB:
      action.payload.clubs.forEach((v) => copiedState.clubs.push(v));
      return { ...copiedState };
    case MODIFY_CLUB: {
      const curr: clubType = { categories: "", clubName: "", clubId: "" };
      const modClubs = copiedState.clubs.map((v) => {
        if (v.clubId === action.payload.clubId) {
          curr.categories = action.payload.val.categories;
          curr.clubName = action.payload.val.clubName;
          curr.clubId = action.payload.clubId;
          return {
            clubName: action.payload.val.clubName,
            categories: action.payload.val.categories,
            clubId: action.payload.clubId
          };
        }
        return v;
      });
      return { ...copiedState, clubs: modClubs, currentClub: curr };
    }
    case REMOVE_CLUB:
      if (!copiedState.currentClub) return copiedState;
      return {
        ...copiedState,
        clubs: copiedState.clubs.filter((v) => action.payload.clubId !== v.clubId)
      };
    default:
      return copiedState;
  }
};
