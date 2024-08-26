
import { NextResponse } from "next/server";

const AB_TEST_COOKIE_NAME = "ab_test_variant";

const getRandomVariant = () => {
  return Math.random() < 0.5 ? "A" : "B";
};

export function middleware(request) {
  const cookie = request.cookies.get(AB_TEST_COOKIE_NAME);

  if (!cookie) {
    const variant = getRandomVariant();
    const response = NextResponse.next();
    response.cookies.set(AB_TEST_COOKIE_NAME, variant, { path: "/" });
    return response;
  }

  return NextResponse.next();
}
