import { makeAutoObservable } from "mobx";

export default class TokenStore {
    constructor() {
        this._token = {};
        makeAutoObservable(this);
    } 

    setToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token))
        this._token = token;
    }

    getToken(token) {
        this._token = token;
    }

    get token() {
        return this.token;
    }
}