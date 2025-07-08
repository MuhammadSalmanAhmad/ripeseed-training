// filepath: /Users/ripeseed/Desktop/testapp/MiniWallet/src/services/rateCoversion.tsx
import axios from "axios";
import Constants from "expo-constants";

const EXCHANGE_RATE_API_KEY = Constants.expoConfig?.extra?.EXCHANGE_RATE_API_KEY;

export const convertRate = async (from: string, to: string, amount: string) => {
  try {
    const response = await axios.get(
      `https://v6.exchangerate-api.com/v6/${EXCHANGE_RATE_API_KEY}/pair/${from}/${to}/${amount}`
    );
    return response['data'].conversion_result
  } catch (error) {
    console.log(error);
  }
};