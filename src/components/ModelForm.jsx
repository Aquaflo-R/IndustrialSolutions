import { useEffect, useRef } from "react";

function ModelForm({ isOpen, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div
        ref={modalRef}
        className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold font-primary">
            Request A Quote
          </h3>
          <button
            onClick={onClose}
            className="text-xl text-[#0B2B26] hover:text-[#235347] cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form className="space-y-4">
            <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg"
            />

            <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg"
            />

            <textarea
                rows="4"
                placeholder="Message"
                className="w-full px-4 py-2 border rounded-lg"
            />

            <div className="text-center">
                <button
                type="submit"
                className=" bg-[#235347] hover:bg-[#DAF1DE] text-white hover:text-black py-2 px-4 
                    rounded-lg transition cursor-pointer border border-transparent hover:border-[#235347]"
                >
                Send Message
            </button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default ModelForm;
