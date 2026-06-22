

import GlitchText from "../components/GlitchText";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <GlitchText
          speed={1.2}
          enableShadows={true}
          enableOnHover={true}
          className="!text-6xl md:!text-7xl mb-4"
        >
          CONTACT
        </GlitchText>

        <p className="text-zinc-400 text-lg mb-12">
          Let's build something amazing together.
        </p>

        <div
          className="
            border border-cyan-400/20
            rounded-3xl
            bg-zinc-950/80
            backdrop-blur-xl
            p-8 md:p-12
            shadow-[0_0_40px_rgba(0,229,255,0.08)]
          "
        >

          <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12">

            {/* LEFT SIDE */}

            <div>

              <h3 className="text-white text-3xl font-bold mb-8">
                SEND MESSAGE
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-zinc-900
                    border
                    border-zinc-700
                    text-white
                    placeholder:text-zinc-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_25px_rgba(0,229,255,0.25)]
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-zinc-900
                    border
                    border-zinc-700
                    text-white
                    placeholder:text-zinc-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_25px_rgba(0,229,255,0.25)]
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-zinc-900
                    border
                    border-zinc-700
                    text-white
                    placeholder:text-zinc-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_25px_rgba(0,229,255,0.25)]
                  "
                />

                <textarea
                  rows={8}
                  placeholder="Tell me about your project..."
                  className="
                    w-full
                    p-5
                    rounded-2xl
                    bg-zinc-900
                    border
                    border-zinc-700
                    text-white
                    placeholder:text-zinc-500
                    resize-none
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_25px_rgba(0,229,255,0.25)]
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    py-5
                    rounded-2xl
                    font-semibold
                    tracking-[0.15em]
                    uppercase
                    text-white
                    bg-gradient-to-r
                    from-red-500
                    to-red-600
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    hover:shadow-[0_0_40px_rgba(255,59,59,0.55)]
                  "
                >
                  Send Transmission
                </button>

              </form>

            </div>

            {/* RIGHT SIDE */}

            <div>

              <h3 className="text-cyan-400 text-3xl font-bold mb-8">
                CONNECT
              </h3>

              <div className="space-y-5">

                <a
                  href="https://github.com/arnavanand2005"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-5
                    p-5
                    rounded-2xl
                    bg-zinc-900/50
                    border border-zinc-800
                    hover:border-cyan-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    group
                  "
                >
                  <FaGithub
                    className="
                      text-4xl
                      transition-all
                      duration-300
                      group-hover:rotate-12
                      group-hover:scale-110
                    "
                  />

                  <div>
                    <p className="font-semibold">
                      GitHub
                    </p>

                    <p className="text-sm text-zinc-500">
                      github.com/arnavanand2005
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/arnav-anand-056710315/"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-5
                    p-5
                    rounded-2xl
                    bg-zinc-900/50
                    border border-zinc-800
                    hover:border-cyan-400
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    group
                  "
                >
                  <FaLinkedin
                    className="
                      text-4xl
                      transition-all
                      duration-300
                      group-hover:-rotate-12
                      group-hover:scale-110
                    "
                  />

                  <div>
                    <p className="font-semibold">
                      LinkedIn
                    </p>

                    <p className="text-sm text-zinc-500">
                      Connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:arnavanand2005@gmail.com"
                  className="
                    flex items-center gap-5
                    p-5
                    rounded-2xl
                    bg-zinc-900/50
                    border border-zinc-800
                    hover:border-red-500
                    hover:text-red-400
                    transition-all
                    duration-300
                    group
                  "
                >
                  <FaEnvelope
                    className="
                      text-4xl
                      transition-all
                      duration-300
                      group-hover:rotate-12
                      group-hover:scale-110
                    "
                  />

                  <div>
                    <p className="font-semibold">
                      Email
                    </p>

                    <p className="text-sm text-zinc-500">
                      arnavanand2005@gmail.com
                    </p>
                  </div>
                </a>

              </div>

              <div
                className="
                  mt-8
                  p-6
                  rounded-2xl
                  bg-zinc-900/40
                  border border-zinc-800
                "
              >
                <h4 className="text-cyan-400 font-semibold mb-4">
                  Available For
                </h4>

                <ul className="space-y-3 text-zinc-300">
                  <li>• Full Stack Web Development</li>
                  <li>• React.js Applications</li>
                  <li>• AI / Machine Learning Projects</li>
                  <li>• Open Source Contributions</li>
                  <li>• Freelance Collaborations</li>
                </ul>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

