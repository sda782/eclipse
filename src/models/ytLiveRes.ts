import type { ytVideoRes } from "./ytVideoRes.js"

export interface ytLiveRes {
    kind: string
    etag: string
    nextPageToken: string
    prevPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: ytVideoRes[]
}