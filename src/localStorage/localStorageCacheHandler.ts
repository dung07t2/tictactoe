/**
 * Using Web Browser LocalStorage with time interval
 */

const CACHE_INTERVAL = 4 * 60 * 60 * 1000;

function getItemObject(key: string): any {
    const itemStr = localStorage.getItem(key);
    const item = itemStr ? JSON.parse(itemStr) : null;
    return item;
}

function clear(): void {
    localStorage.clear();
}

function remove(key: string): void {
    localStorage.removeItem(key);
}

/**
 *
 * @param key
 * @param value
 * @param ttl timeToLive in millisecond
 */
function store(key: string, value: any, ttl = CACHE_INTERVAL): void {
    const item = {
        data: JSON.stringify(value),
        timestamp: (Date.now() + ttl).toString(),
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// Returns the store value if an object has been stored using the store method
// and have not expired yet
function retrieve(key: string): any {
    const item = getItemObject(key);
    if (item === null) {
        return null;
    }
    const timestamp = Number(item.timestamp);
    if (Number.isNaN(timestamp)) {
        return null;
    }
    const date = new Date(timestamp);
    if (date.toString() === 'Invalid Date') {
        return null;
    }
    if (Date.now() <= date.getTime()) {
        return JSON.parse(item.data);
    }
    localStorage.removeItem(key);
    return null;
}

export const localStorageCache = {
    store,
    retrieve,
    remove,
    clear,
};
