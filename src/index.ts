import { writeFileSync, mkdirSync } from 'fs'
import { getImageBuffer, getThreadImgsUrl } from './imageFetcher';
import { getThreads } from './threadParser';
import { Post } from './types';
import { sync } from 'rimraf'
import { patterns } from './regexPatterns';

const ZSMPattern = patterns['ZSM']

sync('./res')
mkdirSync('./res')
getThreads()
.then((threads: Post[]) => threads
.filter(({comment}) => ZSMPattern.test(comment))
.map(({ num }) => getThreadImgsUrl(num)
.then(urls => urls.map(url => getImageBuffer(url)
.then(data => writeFileSync(`./res/${num}-${url.split('/').reverse()[0]}`, data))))))
.catch(console.log)
