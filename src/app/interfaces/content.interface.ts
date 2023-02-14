import { Preview } from "./preview.interface";
import { Title } from "./title.interface";

export interface Content {
	agency_name: string;
	author_name: string;
	count: number;
	has_article: boolean;
	id: number;
	kind: string;
	preview: Preview[];
	product_name: string;
	seo_url: string;
	tags: any[];
	timestamp: Date;
	title: Title[];
	video_count: number;
	video_duration: number;
	video_title: Title[];
}
