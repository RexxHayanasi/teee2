// utils/watchHistory.ts
type Episode = {
  id: string;
  title: string;
  poster: string;
  episode: string;
  router?: string;
  watchedAt?: Date;
};

export const saveEpisode = (episode: Episode): Episode[] => {
  try {
    if (typeof window === 'undefined') return [];

    const episodeList: Episode[] = JSON.parse(
      localStorage.getItem('last_watched') || '[]'
    );

    // Cek apakah episode sudah ada dengan kriteria yang lebih longgar
    const existingIndex = episodeList.findIndex(
      (e) => e.id === episode.id && e.title === episode.title
    );

    if (existingIndex >= 0) {
      // Update episode yang sudah ada
      episodeList[existingIndex] = {
        ...episodeList[existingIndex],
        ...episode,
        watchedAt: new Date() // Update waktu tonton
      };
    } else {
      // Tambahkan episode baru
      episodeList.unshift({
        ...episode,
        watchedAt: new Date()
      });
    }

    // Batasi maksimal 50 item yang disimpan
    const trimmedList = episodeList.slice(0, 50);
    localStorage.setItem('last_watched', JSON.stringify(trimmedList));
    return trimmedList;
  } catch (error) {
    console.error('Failed to save episode:', error);
    return [];
  }
};

export const updateEpisode = (fullEpisode: Episode, router: string): Episode[] => {
  try {
    if (typeof window === 'undefined') return [];

    const episodeList: Episode[] = JSON.parse(
      localStorage.getItem('last_watched') || '[]'
    );

    const updatedList = episodeList.map((e) =>
      e.router === router ? { ...e, ...fullEpisode, watchedAt: new Date() } : e
    );

    localStorage.setItem('last_watched', JSON.stringify(updatedList));
    return updatedList;
  } catch (error) {
    console.error('Failed to update episode:', error);
    return [];
  }
};

export const deleteAllEpisode = (): void => {
  try {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('last_watched');
  } catch (error) {
    console.error('Failed to clear watch history:', error);
  }
};

export const getSavedEpisode = (): Episode[] => {
  try {
    if (typeof window === 'undefined') return [];
    
    const data = localStorage.getItem('last_watched');
    if (!data) return [];
    
    const episodeList: Episode[] = JSON.parse(data);
    
    // Sort berdasarkan waktu tonton terbaru
    return episodeList.sort((a, b) => 
      new Date(b.watchedAt || 0).getTime() - new Date(a.watchedAt || 0).getTime()
    );
  } catch (error) {
    console.error('Failed to get saved episodes:', error);
    return [];
  }
};

// Fungsi tambahan untuk menghapus episode tertentu
export const removeEpisode = (id: string): Episode[] => {
  try {
    if (typeof window === 'undefined') return [];

    const episodeList: Episode[] = JSON.parse(
      localStorage.getItem('last_watched') || '[]'
    );

    const filteredList = episodeList.filter((e) => e.id !== id);
    localStorage.setItem('last_watched', JSON.stringify(filteredList));
    return filteredList;
  } catch (error) {
    console.error('Failed to remove episode:', error);
    return [];
  }
};
