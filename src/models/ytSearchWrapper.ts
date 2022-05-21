import type { ytVideoRes } from "./ytVideoRes.js"

export interface ytSearchWrapper {
    kind: string
    etag: string
    nextPageToken: string
    prevPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    statistics: {
        commentCount: number
        favoriteCount: number
        likeCount: number
        viewCount: number
    }
    items: ytVideoRes[]
}