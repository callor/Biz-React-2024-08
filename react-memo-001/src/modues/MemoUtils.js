// uuidv7 dependency 를 import 하여 uuid 라는 이름으로 사용하겠다
import { uuidv7 as uuid } from "uuidv7";
import moment from "moment";

export const getMemoJSON = (subject, memo) => {
  const json = {
    id: uuid(),
    date: moment().format("yyyy-MM-DD"),
    time: moment().format("HH:mm:ss"),
    subject: subject,
    content: memo,
  };
  return json;
};

const getSampleMemos = () => {
  const memos = [];
  for (let i = 0; i < 20; i++) {
    memos.push(getMemoJSON());
  }
};
