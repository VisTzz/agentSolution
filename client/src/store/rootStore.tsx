import ContragentsStore from "./ContragentsStore";
import TokenStore from "./TokenStore";
import UserStore from "./UserStore";

export type RootStore = {
    user: UserStore;
    contragents: ContragentsStore,
    token: TokenStore
}