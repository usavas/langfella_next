process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

import axios from "axios";
import https from "https";

type ApiSettingsType = {
  baseUri: string;
};

const ApiSettings: ApiSettingsType = {
  baseUri: "https://localhost:5001",
};

export const instance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
  baseURL: ApiSettings.baseUri,
});
