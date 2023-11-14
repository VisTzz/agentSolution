import { makeAutoObservable } from "mobx";

export default class TokenStore {
    _token: string;
    constructor() {
        this._token = '';
        makeAutoObservable(this);
    } 

    setToken(token: string) {
        sessionStorage.setItem('token', JSON.stringify(token))
        this._token = token;
    }

    getToken(token: string) {
        this._token = token;
    }

    get token(): string {
        return this.token;
    }
}