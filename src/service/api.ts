import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_API_TOKEN
  }
});

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  try {
    const response = await api.post("/send", formData);
    return response.data;
  } catch (error: any) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    throw new Error(error?.response?.data?.message || "Erro ao enviar email");
  }
};
