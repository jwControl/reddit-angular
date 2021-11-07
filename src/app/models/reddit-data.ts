import { Item } from './item';

export interface RedditData {
    after: string;
    before: string;
    items: Item[];
}