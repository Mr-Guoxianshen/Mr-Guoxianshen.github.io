import store from "../../store/store";

const baseUrl = resourceConfig.api;
const bdcUrl = resourceConfig.bdcApi;
const common = {
  get(target, options, success, error) {
    store.commit("SET_LOADING_STATUS", true);
    options = options || {};
    let url = /^https?:\/\//i.test(target) ? target : baseUrl + target;
    let params = {
      method: "GET",
      url: url,
      data: options,
      dataType: "JSON",
      xhrFields: {
        withCredentials: true
      },
      traditional: true,
      success: function() {
        store.commit("SET_LOADING_STATUS", false);
        success.apply(null,arguments);
      },
      error: function() {
        store.commit("SET_LOADING_STATUS", false);
        error.apply(null,arguments);
      }
    };

    $.ajax(params);
  },
  post(target, options, success, error) {
    options = options || {};
    let url = /^https?:\/\//i.test(target) ? target : baseUrl + target;
    let params = {
      method: "POST",
      url: url,
      data: options,
      dataType: "JSON",
      xhrFields: {
        withCredentials: true
      },
      traditional: true,
      success: function() {
        store.commit("SET_LOADING_STATUS", false);
        success();
      },
      error: function() {
        store.commit("SET_LOADING_STATUS", false);
        error();
      }
    };

    $.ajax(params);
  }
};

export default common;
