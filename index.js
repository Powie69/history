const list = [
	"https://www.google.com",
	"https://www.facebook.com",
	"https://www.instagram.com",
	"https://www.reddit.com",
	"https://www.netflix.com",
	"https://www.youtube.com",
	"https://www.amazon.com",
	"https://www.wikipedia.com",
	"https://www.ebay.com",
	"https://www.twitch.tv",
	"https://www.apple.com",
	"https://www.microsoft.com",
	"https://www.oracle.com",
	"https://www.ibm.com",
	"https://www.salesforce.com",
	"https://www.dropbox.com",
	"https://www.slack.com",
	"https://www.discord.com",
	"https://www.paypal.com",
	"https://www.uber.com",
	"https://www.airbnb.com",
	"https://www.linkedin.com",
	"https://www.pinterest.com",
	"https://www.twitter.com",
	"https://www.tiktok.com",
	"https://www.snapchat.com",
	"https://www.flickr.com",
	"https://www.vimeo.com",
	"https://www.soundcloud.com",
	"https://www.github.com",
	"https://www.stackoverflow.com",
	"https://www.quora.com",
	"https://www.tripadvisor.com",
	"https://www.expedia.com",
	"https://www.booking.com",
	"https://www.yelp.com",
	"https://www.zillow.com",
	"https://www.craigslist.com",
	"https://www.imdb.com",
	"https://www.rotten tomatoes.com",
	"https://www.metacritic.com",
	"https://www.gamefaqs.com",
	"https://www.ign.com",
	"https://www.polygon.com",
	"https://www.kotaku.com",
	"https://www.rockpapershotgun.com",
	"https://www.vice.com",
	"https://www.buzzfeed.com",
	"https://www.huffpost.com",
	"https://www.cnbc.com",
];

function run() {
	console.log("d");
	for (let i of list) {
		console.log("s");
		setTimeout(() => {
			window.open(i, "_blank");
		}, 2500);
	}
}
