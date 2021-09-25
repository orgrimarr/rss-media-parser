const getMediasFromRSS = require('./index')


const logFirstElement = function (result) {
    result.items = result.items
        .filter(el => el.media !== null)
        .map(el => { delete el.description; return el })
    result.items = result.items[0] || []
    console.log(result)
}

const test = async () => {
    // logFirstElement(await getMediasFromRSS("http://feeds.feedburner.com/KorbensBlog-UpgradeYourMind"))
    // logFirstElement(await getMediasFromRSS("https://www.youtube.com/feeds/videos.xml?channel_id=UCMCnZGIOeLVO65-LBxkkHyQ"))
    // logFirstElement(await getMediasFromRSS("https://rss.art19.com/ifttd-if-this-then-dev"))
    // logFirstElement(await getMediasFromRSS("https://twitchrss.appspot.com/vod/riotgames", { useLinkAsFallack: true }))
    // logFirstElement(await getMediasFromRSS("http://feeds.bbci.co.uk/news/world/rss.xml", { useLinkAsFallack: true }))
    logFirstElement(await getMediasFromRSS("https://rss.app/feeds/o6DjqcfIQSXfMdQE.xml"))
}


test()