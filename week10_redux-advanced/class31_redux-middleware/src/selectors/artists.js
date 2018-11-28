import { createSelector } from 'reselect';

export const getArtists = state => state.artists.list;

export const getSearchTerm = state => state.artists.searchTerm;
