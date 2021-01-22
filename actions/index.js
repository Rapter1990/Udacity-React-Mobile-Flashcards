import {getDecks, saveDeckTitle, removeDeckFromStorage, addCardToDeck} from '../utils/api';

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
export const REMOVE_DECK = "REMOVE_DECK";
export const RESET_DATA = "RESET_DATA";

export function receiveDecksAction(decks) {
    return {
      type: RECEIVE_DECKS,
      decks
    };
}
  
export function addDeckAction(title){
    return {
      type: ADD_DECK,
      title
    };
}
  
export function addCardToDeckAction(deckId, card){
    return {
      type: ADD_CARD,
      deckId,
      card
    };
}
  
export function removeDeckAction(deckId){
    return {
        type: REMOVE_DECK,
        deckId
    };
}

export const resetData = () => ({
    type: RESET_DATA
});


export const getAllDecks = () => async(dispatch) => {
    try {
        getDecks().then(decks => {
            dispatch(receiveDecksAction(decks))
        })
    } 
    catch(error) {
        console.error('Error reading decks from file', error);
    }
}
  
export const addDeck = (title) => async(dispatch) => {
    try {
        saveDeckTitle(title)
        return dispatch(addDeckAction(title))
    } catch (error) {
        console.error('Error saving new deck', error);
    }
}

export const addCardToTheDeck = (deckId, card) => async(dispatch) => {
    try {
        addCardToDeck(deckId, card).then(
            r =>dispatch(addCardToDeckAction(deckId, card)))
    } catch (error) {
        console.error('Error adding card to the deck', error);
    }
}

export const removeDeck = (deckId) => async(dispatch) => {
    try {
        removeDeckFromStorage(deckId).then(r => dispatch(removeDeckAction(deckId)))
    } catch (error) {
        console.error('Error removing deck', error);
    }
}