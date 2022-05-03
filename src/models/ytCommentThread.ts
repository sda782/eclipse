import type { ytComment } from "./ytComment.js"

export interface ytCommentThread {
    kind: string
    etag: string
    id: string
    snippet: {
        channelId: string
        videoId: string
        topLevelComment: ytComment
        canReply: boolean
        totalReplyCount: undefined | number
        isPublic: boolean
    }
    replies: {
        comments: ytComment[]
    }
}