// Part I: Run this in console after opening https://www.zhihu.com/people/<your-zhihu-username>/following

let links = new Set();

function collect() {
    console.log("Collecting from this page...");
    document.querySelectorAll('a.UserLink-link').forEach(a => links.add(a.href))
    document.getElementsByClassName("PaginationButton-next")[0].click();
    console.log("Waiting page loading...");
    setTimeout(collect, 2000);
}

// When there is a "Uncaught TypeError: Cannot read property 'click' of undefined", the collection has finished, run the
// link below to export your followings (In Chrome, you can "Copy" the output conveniently from console)

console.log(JSON.stringify(Array.from(links)));

// Save the copied file somewhere, like "path/to/following.json", and run
//     node export-opml.js path/to/following.json zhihu.opml
// The output OPML is zhihu.opml