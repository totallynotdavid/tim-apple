export interface Artwork {
	url: string;
	width: number;
	height: number;
	bgColor?: string;
}

export interface NavigationTab {
	id: string;
	label: string;
	url: string;
	icon: string;
}

export interface TodayCard {
	title: string;
	heading?: string;
	style: "dark" | "light";
	media: Artwork;
	url: string;
	isAppIcon?: boolean;
}

export interface ProductBadgeItem {
	type: "rating" | "award" | "age";
	heading: string;
	rating?: number;
	text?: string;
}

export interface ProductMediaItem {
	screenshot: Artwork;
}

export interface SearchLink {
	title: string;
	url: string;
}

export interface BrickItem {
	url: string;
	media: Artwork;
	heading?: string;
	title: string;
}

export interface LockupItem {
	url: string;
	icon: Artwork;
	title: string;
	subtitle?: string;
}

export type GridItem = unknown;

export interface Shelf {
	id?: string;
	title?: string;
	contentType?: string;
	items: unknown[];
}
