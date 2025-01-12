import { useEffect } from "react";

export const useDynamicTitle = (loading: boolean, episodeTitle?: string) => {
  useEffect(() => {
    document.title = loading
      ? "Loading... | Archavelianime"
      : `${episodeTitle} | Archavelianime`;

    return () => {
      document.title = "Otakudesu";
    };
  }, [loading, episodeTitle]);
};
