export interface ytVideoDetail {
    kind: string
    etag: string
    id: string
    snippet: {
        publishedAt: string
        channelId: string
        title: string
        description: string
        thumbnails: {
            (key): {
                url: string
                width: undefined | number
                height: undefined | number
            }
        }
        channelTitle: string
        tags: [
            string
        ]
        categoryId: string
        liveBroadcastContent: string
        defaultLanguage: string
        localized: {
            title: string
            description: string
        }
        defaultAudioLanguage: string
    }
    contentDetails: {
        duration: string
        dimension: string
        definition: string
        caption: string
        licensedContent: boolean
        regionRestriction: {
            allowed: [
                string
            ]
            blocked: [
                string
            ]
        }

        projection: string
        hasCustomThumbnail: boolean
    }
    status: {
        uploadStatus: string
        failureReason: string
        rejectionReason: string
        privacyStatus: string
        publishAt: string
        license: string
        embeddable: boolean
        publicStatsViewable: boolean
        madeForKids: boolean
        selfDeclaredMadeForKids: boolean
    }
    statistics: {
        viewCount: undefined | number
        likeCount: undefined | number
        dislikeCount: undefined | number
        favoriteCount: undefined | number
        commentCount: undefined | number
    }
    player: {
        embedHtml: string
        embedHeight: number
        embedWidth: number
    }
    topicDetails: {
        topicIds: [
            string
        ]
        relevantTopicIds: [
            string
        ]
        topicCategories: [
            string
        ]
    }
    recordingDetails: {
        recordingDate: string
    }
    fileDetails: {
        fileName: string
        fileSize: undefined | number
        fileType: string
        container: string
        videoStreams: [
            {
                widthPixels: undefined | number
                heightPixels: undefined | number
                frameRateFps: number
                aspectRatio: number
                codec: string
                bitrateBps: undefined | number
                rotation: string
                vendor: string
            }
        ]
        audioStreams: [
            {
                channelCount: undefined | number
                codec: string
                bitrateBps: undefined | number
                vendor: string
            }
        ]
        durationMs: undefined | number
        bitrateBps: undefined | number
        creationTime: string
    }
    processingDetails: {
        processingStatus: string
        processingProgress: {
            partsTotal: undefined | number
            partsProcessed: undefined | number
            timeLeftMs: undefined | number
        }
        processingFailureReason: string
        fileDetailsAvailability: string
        processingIssuesAvailability: string
        tagSuggestionsAvailability: string
        editorSuggestionsAvailability: string
        thumbnailsAvailability: string
    }
    suggestions: {
        processingErrors: [
            string
        ]
        processingWarnings: [
            string
        ]
        processingHints: [
            string
        ]
        tagSuggestions: [
            {
                tag: string
                categoryRestricts: [
                    string
                ]
            }
        ]
        editorSuggestions: [
            string
        ]
    }
    liveStreamingDetails: {
        actualStartTime: string
        actualEndTime: string
        scheduledStartTime: string
        scheduledEndTime: string
        concurrentViewers: undefined | number
        activeLiveChatId: string
    }
    localizations: {
        (key): {
            title: string
            description: string
        }
    }
}