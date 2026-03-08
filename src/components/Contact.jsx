import React, { useState } from "react";
const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };
const Contact = () => {
  const inputClass =
    "bg-transparent border-0 border-b border-stone-200 focus:border-stone-900 py-3 font-sans text-sm text-stone-900 placeholder-stone-300 outline-none transition-colors duration-200 w-full resize-none";

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 10)
      e.message = "Message is too short";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm(INITIAL_FORM);
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (error) {
      alert("Server error. Please try again later.", error);
    }
  };

  return (
    <section id="contact" className="py-28 px-12  bg-[#f0efe9]">
      <div className="max-w-6xl mx-auto">
        <div className="grid gird-cols-1 md:grid-cols-1 gap-10 ">
          <div className="flex items-center gap-4 text-[.68rem] tracking-[.2em] uppercase text-stone-500 mb-5 font-sans">
            <span className="w-8 h-px bg-stone-300" />
            Contact
          </div>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-[-0.025em] font-normal mb-12 text-stone-900">
            Let's work <br />
            together.
          </h2>
          <div className="flex flex-col gap-10">
            {[
              { label: "Email", val: "Sumitdhakal082@gmail.com" },
              {
                label: "Location",
                val: "Biratnagar, Nepal.  Remote OK",
              },
            ].map((c) => (
              <div key={c.label}>
                <div className="text-[.65rem] tracking-[.15em] uppercase text-stone-500 mb-1 font-sans">
                  {c.label}
                </div>
                <div className="text-base text-stone-600 font-sans">
                  {c.val}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-[.65rem] tracking-[.12em] uppercase text-stone-400 font-sans">
                  Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[.65rem] tracking-[.12em] uppercase text-stone-400 font-sans">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[.65rem] tracking-[.12em] uppercase text-stone-400 font-sans">
                Subject
              </label>
              <input
                name="subject"
                value={form.subject}
                className={inputClass}
                onChange={handleChange}
                placeholder="Project inquiry"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[.65rem] tracking-[.12em] uppercase text-stone-400 font-sans">
                Message
              </label>
              <textarea
                name="message"
                className={inputClass}
                onChange={handleChange}
                value={form.message}
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 border border-stone-900 text-xs tracking-widest font-sans text-stone-900 bg-transparent hover:bg-stone-900 hover:text-[#f0efe9] transition-all duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
