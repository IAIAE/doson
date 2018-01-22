export interface ICache{
    useCache: boolean;
    [propName: string]: any;
}

import * as http from 'http'