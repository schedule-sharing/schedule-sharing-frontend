import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/reducers/rootReducer";
import {
  setVisibility as setVisi,
  VisibilityStrings
} from "../../../store/reducers/visibilityReducer/visibilityReducer";

export default function useVisibility() {
  const dispatch = useDispatch();
  const visibility = useSelector((state: RootState) => state.visibilityReducer);

  const setVisibility = useCallback(
    (type: VisibilityStrings) => {
      dispatch(setVisi(type));
    },
    [dispatch]
  );
  return { visibility, setVisibility };
}
