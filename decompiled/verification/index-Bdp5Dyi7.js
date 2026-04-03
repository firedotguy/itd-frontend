import { b, y, a7 } from "./index-d9k9JBOp.js";

export function Verification(t) {
  const e = b((i) => i.profile?.isPhoneVerified);

  y(() => {
    if (e) {
      window.location.href = "/";
      return;
    }
    window.dispatchEvent(new Event(a7));
  }, [e]);

  return null;
}

export { Verification as Verification };
