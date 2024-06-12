export const selectAdverts = (state) => state.adverts.items;

// export const selectVisibleCount = (state) => state.adverts.visibleCount;

export const selectLoading = (state) => state.adverts.loading;

export const selectError = (state) => state.adverts.error;

export const selectFavorites = (state) => state.adverts.favorites;

export const isFavorite = (favorites, advertId) =>
  favorites.some((item) => item._id === advertId);
