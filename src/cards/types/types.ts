export {};

export interface cards {
    id: number;
    name: string;
    types: string[];
    image: string;
    user?: string;
}

export interface type {
    type: {
        name: string;
    }
}

export interface cardProps {
    cards: cards[];
}

export interface cardItemProps {
    card: cards;
}

