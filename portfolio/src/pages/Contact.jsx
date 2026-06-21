import StarBorder from "../components/StarBorder";
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
      className="bg-black py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <GlitchText
          speed={1}
          enableShadows={true}
          className="text-5xl md:text-6xl mb-4"
        >
          CONTACT
        </GlitchText>

        <p className="text-zinc-400 text-lg mb-12">
          Let's build something amazing together.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT CARD */}

          <StarBorder
            color="#00E5FF"
            speed="2s"
            thickness={2}
            className="w-full"
          >
            <div className="p-8">

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Name"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                  "
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                  "
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="
                    w-full
                    bg-transparent
                    border
                    border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                  "
                />

                <textarea
                  rows={7}
                  placeholder="Your Message..."
                  className="
                    w-full
                    bg-transparent
                    border
                    border-cyan-400/30
                    rounded-xl
                    p-4
                    text-white
                    resize-none
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_20px_rgba(0,229,255,0.3)]
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-red-500
                    hover:bg-red-600
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-[1.02]
                    shadow-[0_0_25px_rgba(255,59,59,0.4)]
                  "
                >
                  SEND TRANSMISSION
                </button>

              </form>

            </div>
          </StarBorder>

          {/* RIGHT CARD */}

          <StarBorder
            color="#FFFFFF"
            speed="3s"
            thickness={2}
            className="w-full"
          >
            <div className="p-8 h-full">

              <h3 className="text-cyan-400 text-3xl font-semibold mb-10 text-center">
                Connect With Me
              </h3>

              <div className="space-y-8">

                <a
                  href="https://github.com/arnavanand2005"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-5
                    text-white
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    group
                  "
                >
                  <FaGithub
                    className="
                      text-5xl
                      transition-all
                      duration-300
                      group-hover:scale-125
                      group-hover:rotate-12
                    "
                  />

                  <div>
                    <p className="font-semibold text-lg">
                      GitHub
                    </p>

                    <p className="text-sm text-zinc-400">
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
                    text-white
                    hover:text-cyan-400
                    transition-all
                    duration-300
                    group
                  "
                >
                  <FaLinkedin
                    className="
                      text-5xl
                      transition-all
                      duration-300
                      group-hover:scale-125
                      group-hover:-rotate-12
                    "
                  />

                  <div>
                    <p className="font-semibold text-lg">
                      LinkedIn
                    </p>

                    <p className="text-sm text-zinc-400">
                      Connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:arnavanand2005@gmail.com"
                  className="
                    flex items-center gap-5
                    text-white
                    hover:text-red-400
                    transition-all
                    duration-300
                    group
                  "
                >
                  <FaEnvelope
                    className="
                      text-5xl
                      transition-all
                      duration-300
                      group-hover:scale-125
                      group-hover:rotate-12
                    "
                  />

                  <div>
                    <p className="font-semibold text-lg">
                      Email
                    </p>

                    <p className="text-sm text-zinc-400">
                      arnavanand2005@gmail.com
                    </p>
                  </div>
                </a>

              </div>

              <div
                className="
                  mt-10
                  border
                  border-cyan-400/20
                  rounded-2xl
                  p-6
                "
              >
                <h4 className="text-cyan-400 font-semibold mb-4 text-center">
                  Available For
                </h4>

                <ul className="space-y-3 text-zinc-300 text-center">
                  <li>• Full Stack Web Development</li>
                  <li>• React.js Applications</li>
                  <li>• AI / Machine Learning Projects</li>
                  <li>• Open Source Contributions</li>
                  <li>• Freelance Collaborations</li>
                </ul>
              </div>

            </div>
          </StarBorder>

        </div>

      </div>
    </section>
  );
}