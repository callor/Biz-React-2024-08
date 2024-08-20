const name = "subject";
const memo = { subject: "안녕하세요", content: "반갑습니다" };

// const memo1 = {...memo,"subject" : "우리나라만세" }
const memo1 = { ...memo, [name]: "우리나라만세" };
