import { mock_top_vid, mock_vid, mock_vid_com, mock_vid_fr_srch } from "./mockAPI"
import {
    getVideos as getVideosYT,
    getVideoCommentThread as getVideoCommentThreadYT,
    getVideoFromSearch as getVideoFromSearchYT,
    getVideoFromId as getVideoFromIdYT,
    getSubscriptions as getSubscriptionsYT
} from "./YoutubeAPI"

export const getVideos = async () => {
    return await getVideosYT()
    //return mock_top_vid
}
export const getVideoCommentThread = async (videoId: string) => {
    return await getVideoCommentThreadYT(videoId)
    //return mock_vid_com
}
export const getVideoFromSearch = async (search_term: string) => {
    return await getVideoFromSearchYT(search_term)
    //return mock_vid_fr_srch
}
export const getVideoFromId = async (videoId: string) => {
    return await getVideoFromIdYT(videoId)
    //return mock_vid
}

export const getSubscriptions = async (channelId: string) => {
    return getSubscriptionsYT(channelId)
}