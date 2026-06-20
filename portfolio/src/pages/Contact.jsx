import ElectricBorder from "../components/ElectricBorder";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <ElectricBorder
          color="#00E5FF"
          speed={1}
          chaos={0.08}
          borderRadius={28}
        >
          <div className="bg-black/95 backdrop-blur-md p-8 md:p-14 rounded-[28px]">

            {/* HEADER */}

            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Contact
            </h2>

            <p className="text-zinc-400 text-lg mb-12">
              Let's build something amazing together.
            </p>

            {/* GRID */}

            <div className="grid lg:grid-cols-2 gap-12">

              {/* LEFT SIDE */}

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Name"
                  className="
                    w-full
                    bg-transparent
                    border border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    transition-all
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.25)]
                  "
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="
                    w-full
                    bg-transparent
                    border border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    transition-all
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.25)]
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full
                    bg-transparent
                    border border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    transition-all
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.25)]
                  "
                />

                <textarea
                  rows="7"
                  placeholder="Your Message..."
                  className="
                    w-full
                    bg-transparent
                    border border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    resize-none
                    transition-all
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.25)]
                  "
                />

                <button
                  type="submit"
                  className="
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    px-8
                    py-4
                    rounded-xl
                    font-semibold
                    transition-all
                    hover:scale-105
                    shadow-[0_0_25px_rgba(255,59,59,0.45)]
                  "
                >
                  SEND TRANSMISSION
                </button>

              </form>

              {/* RIGHT SIDE */}

              <div className="flex flex-col justify-center">

                <h3 className="text-cyan-400 text-2xl font-semibold mb-8">
                  Connect With Me
                </h3>

                <div className="space-y-7">

                  {/* GITHUB */}

                  <a
                    href="https://github.com/arnavanand2005"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-5
                      text-white
                      transition-all
                      hover:text-cyan-400
                      group
                    "
                  >
                    <FaGithub
                      className="
                        text-4xl
                        transition-all
                        duration-300
                        group-hover:rotate-12
                        group-hover:scale-125
                      "
                    />

                    <div>
                      <p className="font-semibold">
                        GitHub
                      </p>

                      <p className="text-sm text-zinc-400">
                        github.com/arnavanand2005
                      </p>
                    </div>
                  </a>

                  {/* LINKEDIN */}

                  <a
                    href="https://www.linkedin.com/in/arnav-anand-056710315/"
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center gap-5
                      text-white
                      transition-all
                      hover:text-cyan-400
                      group
                    "
                  >
                    <FaLinkedin
                      className="
                        text-4xl
                        transition-all
                        duration-300
                        group-hover:-rotate-12
                        group-hover:scale-125
                      "
                    />

                    <div>
                      <p className="font-semibold">
                        LinkedIn
                      </p>

                      <p className="text-sm text-zinc-400">
                        Connect professionally
                      </p>
                    </div>
                  </a>

                  {/* EMAIL */}

                  <a
                    href="mailto:arnavanand2005@gmail.com"
                    className="
                      flex items-center gap-5
                      text-white
                      transition-all
                      hover:text-red-400
                      group
                    "
                  >
                    <FaEnvelope
                      className="
                        text-4xl
                        transition-all
                        duration-300
                        group-hover:rotate-12
                        group-hover:scale-125
                      "
                    />

                    <div>
                      <p className="font-semibold">
                        Email
                      </p>

                      <p className="text-sm text-zinc-400">
                        arnavanand2005@gmail.com
                      </p>
                    </div>
                  </a>

                </div>

                {/* INFO CARD */}

                <div
                  className="
                    mt-10
                    border border-cyan-400/20
                    rounded-2xl
                    p-6
                    bg-white/[0.02]
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
        </ElectricBorder>

      </div>
    </section>
  );
}