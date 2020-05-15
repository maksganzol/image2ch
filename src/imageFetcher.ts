import fetch, {Response} from "node-fetch";
import { Post, File } from './types';

const props = {method: 'GET'};

export const getImageBuffer = (imgPath: string): Promise<Buffer> => 
new Promise((res, rej) => {
    const url = `https://2ch.pm${imgPath}`;
    fetch(url, props)
    .then((res: Response) => res.buffer())
    .then((buff: Buffer) => {
        res(buff);
    })
});
export const getThreadImgsUrl = (threadNum: string): Promise<string[]> => 
fetch(`https://2ch.pm/b/res/${threadNum}.json`, props)
    .then((resp: Response) => resp.json())
    .then((data: {threads: { posts: Post[] }[]}) => data.threads[0].posts)
    .then(posts => posts.map((post: Post) => post.files))
    .then(files => files.flat())
    .then(files => files.map((file: File) => file.path))