export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c08aba5280msh458b6e9131ac357p113069jsna10e54b6f23e",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c08aba5280msh458b6e9131ac357p113069jsna10e54b6f23e",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
