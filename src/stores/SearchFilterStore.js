import { action, makeObservable, observable } from "mobx";

class SearchFilterStore {
    searchFilter = "byname"

    setSearchFilter(value) {
        this.searchFilter = value
    }

    getSearchFilter() {
        return this.searchFilter
    }

    constructor() {
        makeObservable(this, {
            searchFilter: observable,
            setSearchFilter: action,
            getSearchFilter: action,
        });
    }
}

export default SearchFilterStore;