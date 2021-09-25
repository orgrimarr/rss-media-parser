const Parser = require('rss-parser')

const getItemId = item => item.guid || item.id
/**
 *
 *
 * @param {string} uri
 * @param {object} [options={}]
 * @param {boolean} options.useLinkAsFallack
 * @param {boolean} options.originalFeed
 * @return {object} 
 */
const getMediasFromRSS = async function (uri, options = {}) {
    if (!options || typeof options !== "object") {
        options = {}
    }

    const parser = new Parser({
        defaultRSS: '2.0',
        customFields: {
            item: [
                ['media:content', 'media:content', { keepArray: true }],
                ['media:group', 'media:group', { keepArray: false }],
            ]
        }
    })

    const feed = await parser.parseURL(uri)

    const result = {
        title: feed.title,
        items: []
    }

    if (options.originalFeed) {
        result.original = feed
    }

    for (const item of feed.items) {
        const newItem = {
            id: getItemId(item),
            media: null,
            title: item.title || '',
            publicationDate: new Date(item.pubDate),
            description: item.contentSnippet || item.summary || '',
            author: item.author || feed.title || ''
        }

        if (options.originalFeed) {
            newItem.original = item
        }

        if (item['media:group']) {
            if (Array.isArray(item['media:group']['media:content'])) {
                const firstMedia = item['media:group']['media:content'][0]
                if (firstMedia['$'] && firstMedia['$'].url) {
                    newItem.media = {
                        uri: firstMedia['$'].url,
                        source: 'media:group'
                    }
                    if (item['media:group']['media:description'][0]) {
                        newItem.description = item['media:group']['media:description'][0]
                    }
                }
            }
        }
        else if (Array.isArray(item['media:content'])) {
            const firstMedia = item['media:content'][0]
            if (firstMedia['$'] && firstMedia['$'].url) {
                newItem.media = {
                    uri: firstMedia['$'].url,
                    source: 'media:content'
                }
            }
        }
        else if (item.enclosure) {
            const type = item.enclosure.type.toLowerCase()
            const uri = item.enclosure.url
            const isMedia = type.startsWith('video') || type.startsWith('audio') || type.startsWith('image')
            if (isMedia && uri) {
                newItem.media = {
                    uri: uri,
                    source: 'enclosure'
                }
            }
        }
        else if (options.useLinkAsFallack && item.link) {
            newItem.media = {
                uri: item.link,
                source: 'link',
                linkFallback: true
            }
        }
        result.items.push(newItem)
    }

    return result
}

module.exports = getMediasFromRSS