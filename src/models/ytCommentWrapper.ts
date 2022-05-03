import type { ytCommentThread } from './ytCommentThread.js'

export interface ytCommentWrapper {
    kind: string
    etag: string
    nextPageToken: string
    pageInfo: {
        totalResults: number
        resultsPerPage: number
    }
    items: ytCommentThread[]
}