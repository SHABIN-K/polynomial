import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useWatchlistStore = create(
    persist(
        (set) => ({
            // 🔁 UI toggle
            showWatchlistOnly: false,
            setShowWatchlistOnly: () =>
                set((s) => ({ showWatchlistOnly: !s.showWatchlistOnly })),
            // 📌 Watchlist — persisted in localStorage
            watchlist: [],
            setWatchListAssetsId: (id) =>
                set((s) => ({
                    watchlist: s.watchlist.includes(id)
                        ? s.watchlist.filter((i) => i !== id)
                        : [...s.watchlist, id],
                })),
        }),
        {
            name: 'watchlist-storage',// localStorage key
            partialize: (state) => ({ watchlist: state.watchlist }), // persist watchlist
        }
    )
);

export default useWatchlistStore;
