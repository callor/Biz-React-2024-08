// "use server";
import { userCreate } from "@/app/api/user";
import { redirect } from "next/navigation";

const inputTags = {
  username: "username",
  password: "password",
  realname: "realname",
  nickname: "nickname",
  email: "email",
};

const JoinPage = () => {
  const formStyle = {
    width: "60%",
    margin: "10px auto",
    border: "1px solid blue",
  };

  const createUser = async (formData) => {
    "use server";
    const rawFormData = {
      username: formData.get(inputTags.username),
      password: formData.get(inputTags.password),
      realname: formData.get(inputTags.realname),
      nickname: formData.get(inputTags.nickname),
      email: formData.get(inputTags.email),
    };
    await userCreate(rawFormData);
    redirect("/");
  };

  return (
    <form style={formStyle} action={createUser} method="POST">
      <div>
        <input placeholder="USERNAME" type="text" name={inputTags.username} />
      </div>
      <div>
        <input
          placeholder="PASSWORD"
          type="password"
          autoComplete="false"
          name={inputTags.password}
        />
      </div>
      <div>
        <input placeholder="RE_PASSWORD" type="password" autoComplete="false" />
      </div>
      <div>
        <input placeholder="실제이름" type="text" name={inputTags.realname} />
      </div>
      <div>
        <input placeholder="닉네임" type="text" name={inputTags.nickname} />
      </div>
      <div>
        <input placeholder="이메일" type="email" name={inputTags.email} />
      </div>
      <div>
        <input type="submit" value="회원가입" />
      </div>
    </form>
  );
};
export default JoinPage;
