import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import {
  asyncGetClub as getClub,
  asyncPostClub as postClub,
  asyncRemoveClub as removeClub
} from "../../../store/reducers/clubReducer/clubReducer";

export default function useClub() {
  const dispatch = useDispatch();
  const clubs = useSelector((state: RootState) => state.clubReducer);

  const asyncGetClub = useCallback(() => {
    dispatch(getClub());
  }, [dispatch]);
  const asyncPostClub = useCallback(
    (val: clubType) => {
      dispatch(postClub(val));
    },
    [dispatch]
  );
  const asyncRemoveClub = useCallback(
    (id: string) => {
      dispatch(removeClub(id));
    },
    [dispatch]
  );
  return { asyncGetClub, asyncPostClub, asyncRemoveClub, clubs };
}
