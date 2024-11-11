// cardsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CARD_DATA from '../../data/CardData';
import { TCardData } from '../../interfaces/cardInterface';

export interface GameCard extends TCardData {
  liked?: boolean;
  statusIndex?: number | null;
}

interface CardsState {
  cards: GameCard[];
  selectedCard: GameCard;
  favoriteCards: GameCard[];
  activeStatusIndex?: number | null;
  searchQuery: string;
  filteredCards: GameCard[];
}

const initialState: CardsState = {
  cards: CARD_DATA.map((card) => ({ ...card, liked: false })),
  selectedCard: CARD_DATA[0],
  favoriteCards: [],
  activeStatusIndex: null,
  searchQuery: '',
  filteredCards: CARD_DATA.map((card) => ({ ...card, liked: false })),
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.filteredCards = state.cards.filter((card) =>
        card.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
    setSelectedCard: (state, action: PayloadAction<GameCard>) => {
      state.selectedCard = action.payload;
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;

      state.favoriteCards = state.favoriteCards.filter(card => card.id !== cardId);

      const cardIndex = state.cards.findIndex(card => card.id === cardId);
      if (cardIndex !== -1) {
        state.cards[cardIndex].liked = false;
      }

      if (state.selectedCard.id === cardId) {
        state.selectedCard = state.cards.length > 0 ? state.cards[0] : {} as GameCard;
      }
    },
    setLike: (state, action: PayloadAction<number>) => {
      const cardId = action.payload;
      const cardIndex = state.cards.findIndex((card) => card.id === cardId);
      if (cardIndex !== -1) {
        state.cards[cardIndex].liked = !state.cards[cardIndex].liked;
        if (state.cards[cardIndex].liked) {
          state.favoriteCards.push(state.cards[cardIndex]);
        } else {
          state.favoriteCards = state.favoriteCards.filter((card) => card.id !== cardId);
        }
      }
    },
  },
});

export const { setSelectedCard, deleteCard, setLike, setSearchQuery } = cardsSlice.actions;
export default cardsSlice.reducer;