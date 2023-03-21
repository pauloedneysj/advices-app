import axios from "axios";

export type Advice = {
  slip: {
    id: number;
    advice: string;
  };
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export async function getAdvice(): Promise<string> {
  const ramdomId = getRandomInt(1, 221);
  const response = await axios.get<Advice>(
    `https://api.adviceslip.com/advice/${ramdomId}`
  );

  return response.data.slip.advice;
}

export async function getTranslatedAdvice(text: string): Promise<string> {
  const response = await axios.get(
    `https://api.mymemory.translated.net/get?q=${text}&langpair=en|pt-BR"`
  );

  return response.data.responseData.translatedText as string;
}
