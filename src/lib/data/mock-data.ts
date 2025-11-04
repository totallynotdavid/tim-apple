import type { TodayCard } from "$lib/types";

// Helper to create mock artwork
const artwork = (w: number, h: number, text = "") => ({
	url: `https://placehold.co/${w}x${h}/EEE/31343C?text=${text}`,
	width: w,
	height: h,
	bgColor: "#f5f5f7",
});

export const mockData = {
	// Navigation data
	navigation: {
		tabs: [
			{ id: "today", label: "Today", url: "/", icon: "📱" },
			{ id: "games", label: "Games", url: "/games", icon: "🎮" },
			{ id: "apps", label: "Apps", url: "/apps", icon: "📦" },
			{ id: "search", label: "Search", url: "/search", icon: "🔍" },
		],
	},

	// Today page
	todayPage: {
		title: "Today",
		shelves: [
			{
				id: "featured",
				contentType: "todayCard",
				items: [
					{
						title: "Procreate Dreams",
						heading: "Now Available",
						style: "dark",
						media: artwork(800, 600, "Procreate"),
						url: "/article/1",
					} as TodayCard,
					{
						title: "Stumble Guys",
						heading: "Game of the Day",
						style: "dark",
						media: artwork(800, 600, "Stumble"),
						url: "/product/1",
					} as TodayCard,
				],
			},
			{
				id: "apps",
				contentType: "todayCard",
				items: [
					{
						title: "Subway Surfers",
						heading: "Featured Game",
						style: "dark",
						media: artwork(400, 600, "Subway"),
						url: "/product/2",
					} as TodayCard,
					{
						title: "Best Apple Pencil Apps",
						heading: "Get Creative",
						style: "light",
						media: artwork(400, 600, "Apps"),
						url: "/article/2",
					} as TodayCard,
					{
						title: "Notion",
						heading: "App of the Day",
						style: "light",
						media: artwork(200, 200, "Notion"),
						url: "/product/3",
						isAppIcon: true,
					} as TodayCard,
				],
			},
		],
	},

	// Article page
	articlePage: {
		card: {
			title: "Procreate Dreams: Animation for Everyone",
			heading: "Now Available",
			style: "dark",
			media: artwork(800, 600, "Procreate"),
			url: "/product/1",
		} as TodayCard,
		shelves: [
			{
				contentType: "text",
				items: [
					{
						text: "Create captivating animations, faster than ever. Procreate Dreams is an all-new animation app packed with powerful tools that anyone can use.",
					},
				],
			},
			{
				contentType: "image",
				items: [{ artwork: artwork(1200, 675, "Feature") }],
			},
		],
		footerApp: {
			title: "Procreate",
			subtitle: "Sketch, Paint, Create.",
			icon: artwork(200, 200, "Icon"),
			url: "/product/1",
		},
	},

	// Product page
	productPage: {
		title: "Procreate",
		icon: artwork(200, 200, "Procreate"),
		subtitle: "Sketch, Paint, Create.",
		price: "$12.99",
		shelves: [
			{
				contentType: "badge",
				items: [
					{ type: "rating", heading: "Rating", rating: 4.5, text: "4.5" },
					{ type: "award", heading: "Editor's Choice" },
					{ type: "age", heading: "Age", text: "4+" },
				],
			},
			{
				contentType: "media",
				items: [
					{ screenshot: artwork(1600, 900, "SS1") },
					{ screenshot: artwork(1600, 900, "SS2") },
					{ screenshot: artwork(1600, 900, "SS3") },
				],
			},
			{
				contentType: "description",
				items: [
					{
						text: "Loved by creative pros, Procreate is the leading creative application made for iPad. Offering hundreds of handmade brushes, a suite of innovative artistic tools, an advanced layer system, and the lightning fast Valkyrie graphics engine.",
					},
				],
			},
			{
				title: "Ratings & Reviews",
				contentType: "rating",
				items: [
					{
						average: 4.5,
						count: 135000,
						distribution: [500, 1000, 2000, 15000, 116500].reverse(),
					},
				],
			},
		],
	},

	// Search page
	searchPage: {
		title: "Search",
		shelves: [
			{
				title: "Trending",
				contentType: "searchLink",
				items: [
					{ title: "Subway Surfers", url: "/search?q=subway" },
					{ title: "AI Chatbot", url: "/search?q=ai" },
					{ title: "Monopoly Go", url: "/search?q=monopoly" },
					{ title: "Productivity", url: "/search?q=productivity" },
				],
			},
		],
	},
};
