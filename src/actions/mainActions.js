import store from "store";
import { REFRESH } from "./types";

export const refresh = () => store.dispatch({ type: REFRESH})
