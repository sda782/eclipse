export interface ytVideoRes {
    kind: string
    etag: string
    id: {
        kind: string
        videoId: string
    }
    snippet: {
        publishedAt: string
        channelId: string
        title: string
        defaultAudioLanguage: string
        defaultLanguage: string
        description: string
        thumbnails: {
            default: {
                url: string
                width: number
                height: number
            }
            medium: {
                url: string
                width: number
                height: number
            }
            high: {
                url: string
                width: number
                height: number
            }
        }
        channelTitle: string
        liveBroadcastContent: string
        publishTime: string
        tags: string[]
    }
}