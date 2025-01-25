interface stringObject {
    [key: string]: string | { [key: string]: string } | stringObject;
}

export type { stringObject };