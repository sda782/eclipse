export interface ytComment {
    kind: string,
    etag: string,
    id: string,
    snippet: {
        authorDisplayName: string,
        authorProfileImageUrl: string,
        authorChannelUrl: string,
        authorChannelId: {
            value: string
        }
        channelId: string,
        videoId: string,
        textDisplay: string,
        textOriginal: string,
        parentId: string,
        canRate: boolean,
        viewerRating: string,
        likeCount: null | number,
        moderationStatus: string,
        publishedAt: string,
        updatedAt: string
    }

}