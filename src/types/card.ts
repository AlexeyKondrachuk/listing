export interface ICard {
    map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): import("react").ReactNode;
    url: string,
    MainImage: object,
    title: string,
    currency_code: string,
    price: string,
    quantity: number,
    listing_id: number,
    state?: string
}