import { apiRouteLocal, apiRouteQA } from "../config";
import { log } from "../logger";

export const fetchTransactionsRequest = async () => {
    const response = await fetch(apiRouteLocal + "/transactions");
    const transactions = await response.json();
    return transactions;
};

export const postTransactionRequest = async transaction => {
    const requestOptions = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(transaction)
    };
    const response = await fetch(apiRouteLocal + "/transactions", requestOptions);
    log(response);
};