import axios from "axios";
import MultipleBookResponse from "../models/MultipleBookResponse";

const baseURL: string = "https://www.googleapis.com/books/v1/volumes?q=search+terms";
const key: string = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY || "";

export const getBooks = async (): Promise<MultipleBookResponse> => {
  return (
    await axios.get(`${baseURL}`, {
      params: {api_key: key},
    })
  ).data;
};