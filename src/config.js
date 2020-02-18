const config = {
  apiBaseUrl: process.env.VUE_APP_API_BASE_URL || "http://localhost:8081",
  locale: process.env.VUE_APP_LOCALE || "en",
  features: {
    example: parse(process.env.VUE_APP_FEATURE_EXAMPLE, false)
  }
};

function feature(name) {
  return config.features[name];
}

function parse(value, fallback) {
  if (typeof value === "undefined") {
    return fallback;
  }

  switch (typeof fallback) {
    case "boolean":
      return !!JSON.parse(value);
    case "number":
      return JSON.parse(value);
    default:
      return value;
  }
}

export { config };

export default {
  install(Vue) {
    Vue.appConfig = config;
    Vue.feature = feature;
    Vue.prototype.$appConfig = config;
    Vue.prototype.$feature = feature;
  }
};
