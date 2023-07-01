/// <reference types="react" />
import './MentionsPlugin.css';
declare type SearchData<A> = (p: string) => Promise<A[]>;
declare type OffsetCard = {
    leftOffset: number;
    topOffset: number;
};
declare type PopoverCard<A> = {
    card: (data: A) => JSX.Element;
    offset: OffsetCard;
};
declare type GetTypeaheadValues<A> = (result: A) => {
    url: string;
    value: string;
    picture: JSX.Element;
    popoverCard?: PopoverCard<A>;
};
export default function MentionsPlugin<A>(props: {
    searchData: SearchData<A>;
    getTypeaheadValues: GetTypeaheadValues<A>;
}): JSX.Element | null;
export {};
