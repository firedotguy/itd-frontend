import { b, y, ab } from "./index-DOyq0flg.js";

export function Verification(t) {
  const e = b((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(ab));
  }, [e]);

  return null;
}

export { Verification as Verification };
