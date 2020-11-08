'use strict';

const fs = require('fs');

let zhihuURLs = JSON.parse(fs.readFileSync(process.argv[2]));
let outlines = ""

for (let url of zhihuURLs) {
    let xmlUrl = url.split("/").pop();
    // You can customize the RSSHub host and route here if this one is not working well.
    outlines += `<outline type="rss" xmlUrl="https://datatube.dev/api/rss/zhihu/people/activities/${xmlUrl}"/>\n`;
}

let opml = `<?xml version="1.0" encoding="UTF-8"?>
<opml version="1.0">
    <head>
        <title>Zhihu OPML Followings Export</title>
    </head>
    <body>
        <outline title="Zhihu" text="Zhihu">
            ${outlines}
        </outline>
    </body>
</opml>`;

fs.writeFileSync(process.argv[3], opml)