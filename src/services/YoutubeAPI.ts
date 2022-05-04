import axios, { AxiosResponse } from "axios"
import type { ytCommentWrapper } from "../models/ytCommentWrapper.js"
import type { ytLiveRes } from "../models/ytLiveRes.js"
import type { ytVideoWrapper } from "../models/ytVideoWrapper.js"
const api_key = 'AIzaSyDAO3QTYl8gr7yT7VooeSVe3U8drjbcGoA'
const base_url = 'https://www.googleapis.com/youtube/v3'

export const getVideos = async (): Promise<ytLiveRes> => {
    const res: AxiosResponse = await axios.get(base_url + '/search?part=snippet&maxResults=24&type=video&key=' + api_key)
    if (res.status == 200) return res.data
}

export const getVideoCommentThread = async (videoId: string): Promise<ytCommentWrapper> => {
    const res: AxiosResponse = await axios.get(base_url + `/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=` + api_key)
    if (res.status == 200) return res.data

}

export const getVideoFromId = async (videoId: string): Promise<ytVideoWrapper> => {
    const res: AxiosResponse = await axios.get(base_url + `/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` + api_key)
    if (res.status == 200) return res.data
}
