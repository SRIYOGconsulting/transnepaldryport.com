import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 max-w-xs rounded-xl bg-blue-800 p-5 text-white shadow-xl"
      style={{ animation: "fadeIn 0.3s ease" }}
    >
      <h2 className="mb-2 text-lg font-bold">Cookies</h2>
      <p className="mb-4 text-sm leading-relaxed">
        This site uses cookies to offer you a better browsing experience. Learn
        more about{" "}
        <a
          href="/privacy-policy"
          className="underline"
        >
          how we use cookies
        </a>{" "}
        and{" "}
        <a
          href="/cookie-settings"
          className="underline"
        >
          how you can change your settings
        </a>
        .
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          onClick={acceptCookies}
          className="rounded-md border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-blue-800"
        >
          I accept cookies
        </button>

        <button
          onClick={rejectCookies}
          className="rounded-md border border-white px-4 py-2 text-sm font-medium hover:bg-white hover:text-blue-800"
        >
          I refuse cookies
        </button>
      </div>
    </div>
  );
}
