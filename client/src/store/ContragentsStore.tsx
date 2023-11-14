import { makeAutoObservable } from "mobx";
import { Contragent, ContragentDetails } from "../utils/contextTypes";

export default class ContragentsStore {
    _contragents: Array<Contragent>;
    _details: ContragentDetails;
    constructor() {
        this._contragents = []
        this._details = {body: {}}
        makeAutoObservable(this);
    } 

    setContragents(contragents: Array<Contragent>) {
        this._contragents = contragents;
    }

    setDetails(details: ContragentDetails) {
        this._details = details;
    }

    get data() {
        return this._contragents;
    }

    get details() {
        return this._details;
    }
}