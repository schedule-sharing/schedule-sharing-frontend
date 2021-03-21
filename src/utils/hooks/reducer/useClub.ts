import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import { addClub as addC } from "../../../store/reducers/clubReducer/clubReducer";

export default function useClub() {
  const dispatch = useDispatch();
  const clubs = useSelector((state: RootState) => state.clubReducer);

  const addClub = useCallback(
    (val: clubAddType) => {
      dispatch(addC(val));
    },
    [dispatch]
  );
  return { addClub, clubs };
}
