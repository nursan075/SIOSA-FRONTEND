import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils'

const getStorageWithExpiry = (key) => {
    if (typeof localStorage === "undefined") {
        return null;
    }
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return null;

    const { value, expiry } = JSON.parse(storedValue);
    if (Date.now() > expiry) {
        // Jika data sudah kadaluarsa
        localStorage.removeItem(key);
        return null;
    }

    return value;
};

const setStorageWithExpiry = (key, value, ttl) => {
    const expiry = Date.now() + ttl;
    const item = {
        value: value,
        expiry: expiry,
    };
    localStorage.setItem(key, JSON.stringify(item));
};

const atomWithStorageAndExpiry = (key, initialValue, ttl) => {
    const baseAtom = atom(getStorageWithExpiry(key) || initialValue);

    const derivedAtom = atom(
        (get) => get(baseAtom),
        (get, set, newValue) => {
            if (newValue === null) {
                localStorage.removeItem(key);
            } else {
                setStorageWithExpiry(key, newValue, ttl);
            }
            set(baseAtom, newValue);
        }
    );

    return derivedAtom;
}

// Atom storage
const ttl = 10800000
export const emailStorageAtom = atomWithStorageAndExpiry("email", null, ttl)
export const tokenStorageAtom = atomWithStorageAndExpiry("token", null, ttl)
export const nameUserLoginStorageAtom = atomWithStorage("user", null)
export const idUserLoginStorageAtom = atomWithStorage("id", null)



export const isOpenModalAtom = atom(false)

// Data Temperatur
export const nameAtom = atom('')
export const unitAtom = atom('1')
export const deAtom = atom('')
export const ndeAtom = atom('')
export const bodyAtom = atom('')
export const inputByAtom = atom({})
export const dateAtom = atom(new Date())
export const imagesAtom = atom([])
export const dataTemperaturAtom = atom({})


// Data User
export const nameUserAtom = atom('')
export const userNameAtom = atom('')
export const emailAtom = atom('')
export const passwordAtom = atom('')
export const roleAtom = atom('User')
export const tokenAtom = atom(null)
export const dataUserAtom = atom({})
export const profilAtom = atom('')
export const allUserAtom = atom([])

export const menuWideAtom = atom(true)