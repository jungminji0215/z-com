import { redirect } from "next/navigation";

/** 트위터가 /login 경로로 요청하면 /i/flow/login 으로 보내주는 구조를 가지고 있음 */
export default function Login() {
  redirect("/i/flow/login");
}
