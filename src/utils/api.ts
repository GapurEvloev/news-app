import axios, { AxiosResponse } from "axios";

interface ApiResponse<T> {
  data: T;
  status: string;
  totalResults: number;
}

export async function getData<T>(url: string): Promise<T> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios.get(url);
    return response.data.data
  } catch (error) {
    throw error;
  }
}

export async function post<T>(url: string, data: any): Promise<T> {
  try {
    const response: AxiosResponse<ApiResponse<T>> = await axios.post(url, data);
    return response.data.data;
  } catch (error) {
    throw error;
  }
}
