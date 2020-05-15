export type Post = {
    comment: string,
    date: string,
    files: File[],
    files_count: Number,
    num: string,
}

export type File = {
    displayname: string,
    fullname: string,
    height: Number,
    md5: string,
    name: string,
    path: string,
    size: Number,
    type: Number,
    width: Number
}

export type CatalogResponse = {
    Board: string,
    threads: Post[],
}