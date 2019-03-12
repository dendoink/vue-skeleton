// import { store } from "../store";

class Storage {
  getAuthorization() {
    return localStorage.getItem(`authorization`)
      ? localStorage.getItem(`authorization`)
      : '';
  }

  setUser(data) {
    localStorage.setItem(`user`, JSON.stringify(data));
  }

  setTicket(ticket) {
    // 每隔6900s请求一次ticket确保不会过多的请求ticket
    localStorage.setItem(`user_ticket`, JSON.stringify({
      ticket,
      deadTime: ((Date.now() / 1000) >> 0) + 6900
    }));
  }

  /**
   * @description 返回ticket信息
   * @returns {string} ticket
   * @returns {boolean} alive 当前ticket是否仍在时效内
   */
  getTicket() {
    // let curTime = (Date.now() / 1000) >> 0;
    let userTicket = {};
    try {
      if (localStorage.getItem(`user_ticket`)) {
        userTicket = JSON.parse(localStorage.getItem(`user_ticket`));
      }
    } catch (e) {
      console.log('error', 'user_ticket parse error');
    }

    return userTicket
  }

  syncStore(store) {
    store.commit('app/setUserInfo', this.getUser());
  }
}

export const StorageModel = new Storage();
