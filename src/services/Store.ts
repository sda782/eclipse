import { writable } from "svelte/store";
import type { ytSearchWrapper } from "../models/ytSearchWrapper";

const videoListInit: ytSearchWrapper = undefined
export const videoList = writable(videoListInit)