import { writable } from "svelte/store";
import type { ytVideoRes } from "../models/ytVideoRes";

export const signed_in = writable(false)
const watch_history_array: ytVideoRes[] = []
export const watch_history = writable(watch_history_array)
