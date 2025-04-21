import { login } from "@/actions/login-action";

export default function Page() {
  return (
    <div>
      <form action={login}>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
