
import { useState } from "react";
import screen24 from "../assets/screen24.webp";

export default function Login() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("Mobile number:", `+91${phone}`);
  };

  return (
    <section className="min-h-screen bg-[#f5f4f0] flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl min-h-[680px] bg-white grid grid-cols-1 md:grid-cols-2 shadow-2xl shadow-black/10 overflow-hidden">

        <div className="relative hidden md:block min-h-[680px] overflow-hidden">
          <img
            src={screen24}
            alt="Zara fashion editorial"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/10" />

          <div className="absolute top-8 left-8 text-white">
            <p className="text-[10px] tracking-[0.35em] uppercase">
              The new collection
            </p>
          </div>

          <div className="absolute bottom-10 left-8 right-8 text-white">
            <p className="text-xs tracking-[0.3em] uppercase mb-3">
              Zara / 2026
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
              A study in
              <br />
              modern elegance.
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-between px-7 py-10 sm:px-12 md:px-10 lg:px-16 md:py-14">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-[-0.08em] text-black">
              ZARA
            </h1>
            <p className="text-[9px] tracking-[0.4em] text-gray-400 uppercase mt-3">
              Official online store
            </p>
          </div>

          <div className="w-full max-w-sm mx-auto my-12">
            <div className="mb-10">
              <p className="text-[10px] tracking-[0.3em] text-gray-400 uppercase mb-3">
                Welcome
              </p>
              <h2 className="text-2xl font-serif text-black">
                Sign in or register
              </h2>
              <p className="text-sm text-gray-500 mt-3 leading-6">
                Enter your mobile number to receive a
                one-time password.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-[10px] tracking-[0.2em] uppercase text-gray-500 mb-4"
                >
                  Mobile number
                </label>

                <div className="flex items-center border-b border-gray-300 focus-within:border-black transition-colors duration-300">
                  <span className="text-sm text-black pr-4 border-r border-gray-200">
                    +91
                  </span>

                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phone}
                    onChange={(e) =>
                      setPhone(
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10)
                      )
                    }
                    placeholder="00000 00000"
                    className="w-full bg-transparent outline-none px-4 py-3 text-sm tracking-[0.12em] text-black placeholder:text-gray-300"
                    required
                  />
                </div>

                <p className="text-[10px] text-gray-400 mt-3">
                  We will send you a verification code.
                </p>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-black text-white text-[10px] tracking-[0.25em] uppercase hover:bg-[#333] active:scale-[0.99] transition-all duration-300"
              >
                Continue
                <span className="ml-3">→</span>
              </button>
            </form>

            <p className="text-[10px] text-gray-400 leading-5 mt-8 text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="text-black underline underline-offset-4">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-black underline underline-offset-4">
                Privacy Policy
              </a>.
            </p>
          </div>
          <div className="flex justify-between items-center border-t border-gray-100 pt-5 text-[9px] tracking-[0.15em] text-gray-400 uppercase">
            <span>India / English</span>
            <span>© Zara 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
