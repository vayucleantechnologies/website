import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";

const ContactPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000); // 10 sec

    return () => clearTimeout(timer);
  }, []);

  // prevent showing again after close
  const closePopup = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60">
      
      <div className="bg-white p-6 rounded-xl max-w-xl w-full relative shadow-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={closePopup}
          className="absolute top-2 right-3 text-2xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Get Free Quote
        </h2>

        <ContactForm />

      </div>
    </div>
  );
};

export default ContactPopup;
