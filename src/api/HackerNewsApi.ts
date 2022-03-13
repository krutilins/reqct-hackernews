import { HackerNewsItem } from "../types/item";

export const getTopNewsIds = (): Promise<number[]> => {
  return fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    .then(async response => {
      const data = await response.json();

      if (!response.ok) {
        return Promise.reject((data && data.message) || response.statusText);
      }

      return data;
    })
}

export const getItemById = (id: number): Promise<HackerNewsItem> => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then(response => response.json())
}

export const getNewsByIds = (ids: number[]): Promise<HackerNewsItem[]> => {
  const itemsPromises = ids.map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

  return Promise.all(itemsPromises)
    .then(responses => Promise.all(
      responses.map(response => response.json())
    ))
}