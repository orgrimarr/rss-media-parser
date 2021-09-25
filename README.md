# RSS

Test script to parse and get media uri from an rss feed

## Notes

- Twitch : `https://twitchrss.appspot.com/`
- Youtube : `https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}`
- Twitter / Instagram / others : `https://rss.app/rss-feed`

## Usage

```js
const getMediasFromRSS = require('./index')

const result = await getMediasFromRSS("https://www.youtube.com/feeds/videos.xml?channel_id=UCJZv4d5rbIKd4QHMPkcABCw")
console.log(result)
```

```json
{
  "title": "Kevin Powell",
  "items": [
    {
      "id": "yt:video:6UwISwr_yUo",
      "media": {
        "uri": "https://www.youtube.com/v/6UwISwr_yUo?version=3",
        "source": "media:group"
      },
      "title": "Initial doesn't do what you think it does",
      "publicationDate": "2021-09-23T13:04:51.000Z",
      "description": "We often think initial sets something back to how it started, but it actually does a lot more than that. Often, we're looking for unset or revert instead.\r\n\r\n🔗 Links \r\n✅ Codepen: https://codepen.io/kevinpowell/pen/qBjqwJO\r\n✅ Twitch: https://www.twitch.tv/kevinpowellcss\r\n✅ Additional reading: https://developer.mozilla.org/en-US/docs/Web/CSS/revert\n✅ Other CSS behaviors that work in strange ways: https://www.youtube.com/watch?v=qKiz9gdJdr8&list=PL4-IK0AVhVjMdy1JNSpL-_4UnDmY2MpDm&index=1\n\r\n⌚ Timestamps\r\n00:00 - Introduction\n01:24 - What we are starting with and an aside about outlines\n01:55 - A look at what initial actually does\n04:50 - unset\n07:11 - revert\n\r\n#css\r\n\r\n--\r\n\r\nCome hang out with other dev's in my Discord Community\r\n💬 https://discord.gg/nTYCvrK\r\n\r\nKeep up to date with everything I'm up to\r\n✉ https://www.kevinpowell.co/newsletter\r\n\r\nCome hang out with me live every Monday on Twitch!\r\n📺 https://www.twitch.tv/kevinpowellcss\r\n\r\n---\r\n\r\nHelp support my channel\r\n👨‍🎓 Get a course: https://www.kevinpowell.co/courses\r\n👕 Buy a shirt: https://teespring.com/stores/making-the-internet-awesome\r\n💖 Support me on Patreon: https://www.patreon.com/kevinpowell\r\n\r\n---\r\n\r\nMy editor: VS Code - https://code.visualstudio.com/\r\n\r\n---\r\n\r\nI'm on some other places on the internet too!\r\n\r\nIf you'd like a behind the scenes and previews of what's coming up on my YouTube channel, make sure to follow me on Instagram and Twitter.\r\n\r\nTwitter: https://twitter.com/KevinJPowell\r\nCodepen: https://codepen.io/kevinpowell/\r\nGithub: https://github.com/kevin-powell\r\n\r\n---\r\n\r\nAnd whatever you do, don't forget to keep on making your corner of the internet just a little bit more awesome!",
      "author": "Kevin Powell"
    },
    {
      "id": "yt:video:ypNpmXfFfXI",
      "media": {
        "uri": "https://www.youtube.com/v/ypNpmXfFfXI?version=3",
        "source": "media:group"
      },
      "title": "CSS Outlines are great | #shorts",
      "publicationDate": "2021-09-22T13:00:29.000Z",
      "description": "Code: https://codepen.io/kevinpowell/pen/gObLqxz\r\nMore on outlines: https://www.youtube.com/watch?v=OmfgB1vGd88&list=PL4-IK0AVhVjNoKGFcif6NCrs7tzXTlQAI&index=1\r\n\r\n#css\r\n\r\n--\r\n\r\nCome hang out with other dev's in my Discord Community\r\n💬 https://discord.gg/nTYCvrK\r\n\r\nKeep up to date with everything I'm up to\r\n✉ https://www.kevinpowell.co/newsletter\r\n\r\nCome hang out with me live every Monday on Twitch!\r\n📺 https://www.twitch.tv/kevinpowellcss\r\n\r\n---\r\n\r\nHelp support my channel\r\n👨‍🎓 Get a course: https://www.kevinpowell.co/courses\r\n👕 Buy a shirt: https://teespring.com/stores/making-the-internet-awesome\r\n💖 Support me on Patreon: https://www.patreon.com/kevinpowell\r\n\r\n---\r\n\r\nMy editor: VS Code - https://code.visualstudio.com/\r\n\r\n---\r\n\r\nI'm on some other places on the internet too!\r\n\r\nIf you'd like a behind the scenes and previews of what's coming up on my YouTube channel, make sure to follow me on Instagram and Twitter.\r\n\r\nTwitter: https://twitter.com/KevinJPowell\r\nCodepen: https://codepen.io/kevinpowell/\r\nGithub: https://github.com/kevin-powell\r\n\r\n---\r\n\r\nAnd whatever you do, don't forget to keep on making your corner of the internet just a little bit more awesome!",
      "author": "Kevin Powell"
    }
  ]
}
```

## Options

- `useLinkAsFallack` : If no media found, use the link attr as media uri
- `originalFeed` : Return the original parsed feed
