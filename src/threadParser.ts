import { CatalogResponse, Post } from './types';
import fetch, { Response } from "node-fetch";

export const getThreads = (board = 'b'): Promise<Post[]> => new Promise((res, rej) => {
    const url = `https://2ch.pm/${board}/catalog.json`
    fetch(url, {method: 'GET'})
    .then((resp: Response) => resp.json())
    .then((catalog: CatalogResponse) => res(catalog.threads))
    .catch((err: Error) => rej(err))
});