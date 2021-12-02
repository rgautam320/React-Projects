const API_KEY = "JizaJVjPA7XqdMhHa3p9CdZQOe63";

export const getMatches = () => {
   const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;
   return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
};

export const getScore = (id) => {
   const url = `https://cricapi.com/api/cricketScore?apikey=${API_KEY}&unique_id=${id}`;
   return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error));
};
