import axios from "axios"
import type { ytCommentThread } from "../models/ytCommentThread.js"
import type { ytLiveRes } from "../models/ytLiveRes.js"
const api_key = 'AIzaSyDAO3QTYl8gr7yT7VooeSVe3U8drjbcGoA'
const base_url = 'https://www.googleapis.com/youtube/v3'

export const getNewLive = async (): Promise<ytLiveRes> => {
    const res = await axios.get(base_url + '/search?part=snippet&eventType=live&maxResults=25&type=video&key=' + api_key)
    return res.data
}

export const getVideoCommentThread = async (videoId: string): Promise<ytCommentThread> => {
    const res = await axios.get(base_url + `/commentThreads?part=snippet%2Creplies&videoId=_${videoId}=` + api_key)
    return res.data
}
