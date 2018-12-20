


export class LocalStorageService<T> {

    constructor(private key: string) {

    }

    saveItemsToLocalStorage(contacts: Array<T>) {
        const savedContacts = localStorage.setItem(this.key, JSON.stringify(contacts));
        return savedContacts;
      }
    
      getItemsFromLocalStorage(key: string) {
        const savedContacts = JSON.parse(localStorage.getItem(key));
        return savedContacts;
      }

      clearItemFromLocalStorage() {
          localStorage.clear();
      }


}