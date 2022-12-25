import { makeAutoObservable } from "mobx";

export default class TokenStore {
    constructor() {
        this._token = {};
        makeAutoObservable(this);
    } 

    setToken(token) {
        this._token = token;
    }

    getToken(token) {
        this._token = token;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}