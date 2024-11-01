import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CARD_DATA from '../../data/CardData';


export interface GameCard {
  id: number;
  image: string;
  about_header_img: string;
  title: string;
  year: string;
  ganre: string[];
  isonline?: string;
  site?: string;
  developer?: string;
  platforms?: string[];
  liked?: boolean;
  statusIndex?: number | null;
  description?: string
  rate?: number;
  steam?: string;
}

interface GamesState {
  cards: GameCard[];
  selectedCard: GameCard;
  favoriteCards: GameCard[];
  activeStatusIndex?: number | null;
  statusIndex?: number | null;
}

const initialState: GamesState = {
  cards: CARD_DATA.map((card) => ({ ...card, liked: false })),
  selectedCard: CARD_DATA[0],
  favoriteCards: [],
  activeStatusIndex: null,
};

const gamesSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
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
    setActiveStatusIndex: (state, action: PayloadAction<number | null>) => {
      state.activeStatusIndex = action.payload;
    },
    setCardStatusIndex: (state, action: PayloadAction<{ cardId: number; statusIndex: number | null }>) => {
      const { cardId, statusIndex } = action.payload;
      const cardIndex = state.favoriteCards.findIndex(card => card.id === cardId);
      if (cardIndex !== -1) {
        state.favoriteCards[cardIndex].statusIndex = statusIndex;
      }
    },
  },
});

export const { setSelectedCard, setLike, setActiveStatusIndex, setCardStatusIndex, deleteCard } = gamesSlice.actions;
export default gamesSlice.reducer;