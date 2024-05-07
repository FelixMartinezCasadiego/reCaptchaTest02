import { useEffect } from "react";
interface Props {
  sitekey: string;
  verifyCallback: (response: string) => void;
}
const Recaptcha = ({ sitekey, verifyCallback }: Props) => {
  useEffect(() => {
    const onloadCallback = () => {
      window.grecaptcha.render("recaptcha", {
        sitekey: sitekey,
        callback: verifyCallback,
      });
    };

    // Execute the load function once the reCAPTCHA API has been loaded.
    window.onload = onloadCallback;

    // Cleaning when disassembling the component
    return () => {
      window.onload = null;
    };
  }, [sitekey, verifyCallback]);

  return <div id="recaptcha"></div>;
};

export default Recaptcha;
