import type { ytVideoDetail } from "./ytVideoDetail"

export interface ytVideoWrapper {
    kind: string
    etag: string
    nextPageToken: string
    prevPageToken: string
    regionCode: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: ytVideoDetail[]
}