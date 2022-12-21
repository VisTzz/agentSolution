import { makeAutoObservable } from "mobx";

export default class ContragentsStore {
    constructor() {
        this._contragents = []
        this._details = {}
        makeAutoObservable(this);
    } 

    setContragents(contragents) {
        this._contragents = contragents;
    }

    setDetails(details) {
        this._details = details;
    }

    get data() {
        return this._contragents;
    }

    get details() {
        return this._details;
    }
}