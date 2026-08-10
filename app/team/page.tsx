"use client";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  {
    id: "generative-ai",
    number: "01",
    tag: "core concept",
    title: "Generative AI",
    body: "AI that generates new content — text, images, audio, video, and code — rather than just classifying or predicting from fixed categories.",
  },
  {
    id: "llm",
    number: "02",
    tag: "the engine",
    title: "LLM",
    body: "Large Language Model. Trained on enormous amounts of text and code to understand and generate human-like language.",
  },
  {
    id: "tokens",
    number: "03",
    tag: "processing unit",
    title: "Tokens",
    body: "The small pieces a model breaks text into before it can process it — a token can be a full word, part of a word, or a punctuation mark.",
  },
  {
    id: "context-window",
    number: "04",
    tag: "working memory",
    title: "Context window",
    body: "The amount of information — measured in tokens — a model can hold in mind at once while processing a request.",
  },
  {
    id: "inference",
    number: "05",
    tag: "the output step",
    title: "Inference",
    body: "Running a trained model on a new prompt to produce an output. Training happens once; inference happens every time you ask.",
  },
];

const SAMPLE_TOKENS = [
  { text: "Ask", id: "15339" },
  { text: " any", id: "3878" },
  { text: "thing", id: "26792" },
  { text: " to", id: "311" },
  { text: " AI", id: "15592" },
];

const TOKEN_FLOW = [
  { word: "Hello", id: "15339" },
  { word: ",", id: "11" },
  { word: "how", id: "1268" },
  { word: "are", id: "527" },
  { word: "you", id: "499" },
  { word: "?", id: "30" },
];

const FADE = "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out motion-reduce:opacity-100 motion-reduce:translate-y-0";

const TokenFlow = ({ start }: { start: boolean }) => (
  <div className="mt-6 rounded-md border border-[#1B1B18]/10 bg-white/60 p-5 sm:p-7">
    {/* sentence */}
    <div
      className={`rounded-sm border border-[#1B1B18]/15 bg-[#EDEEE7] px-4 py-3 text-center text-sm text-[#1B1B18] ${FADE} ${
        start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
      }`}
    >
      "Hello, how are you?"
    </div>

    <p
      className={`mx-auto mt-3 w-fit text-[11px] text-[#8A8A7E] ${FADE} ${
        start ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: start ? "150ms" : "0ms" }}
    >
      ↓ tokenizer splits it
    </p>

    {/* tokens */}
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {TOKEN_FLOW.map((t, i) => (
        <span
          key={`word-${i}`}
          className={`rounded-sm border border-[#2F3F63]/30 bg-[#2F3F63]/[0.06] px-3 py-1.5 text-sm text-[#2F3F63] ${FADE} ${
            start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: start ? `${250 + i * 60}ms` : "0ms" }}
        >
          {t.word}
        </span>
      ))}
    </div>

    <p
      className={`mx-auto mt-3 w-fit text-[11px] text-[#8A8A7E] ${FADE} ${
        start ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: start ? "650ms" : "0ms" }}
    >
      ↓ each token gets an id
    </p>

    {/* ids */}
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      {TOKEN_FLOW.map((t, i) => (
        <span
          key={`id-${i}`}
          className={`rounded-sm border border-[#3F7D6C]/30 bg-[#3F7D6C]/[0.07] px-3 py-1.5 text-sm text-[#3F7D6C] ${FADE} ${
            start ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: start ? `${750 + i * 60}ms` : "0ms" }}
        >
          {t.id}
        </span>
      ))}
    </div>

    <p
      className={`mx-auto mt-3 w-fit text-[11px] text-[#8A8A7E] ${FADE} ${
        start ? "opacity-100" : "opacity-0"
      }`}
      style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: start ? "1150ms" : "0ms" }}
    >
      ↓
    </p>

    {/* LLM */}
    <div
      className={`mx-auto mt-3 w-fit rounded-sm border border-[#2F3F63]/40 bg-[#2F3F63]/[0.08] px-5 py-2.5 text-sm font-medium text-[#2F3F63] ${FADE} ${
        start ? "opacity-100 translate-y-0 motion-safe:scale-100" : "opacity-0 translate-y-2 motion-safe:scale-95"
      }`}
      style={{ transitionDelay: start ? "1250ms" : "0ms" }}
    >
      LLM (processes ids)
    </div>
  </div>
);

const Page = () => {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [mounted, setMounted] = useState(false);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  useEffect(() => {
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((v) => ({ ...v, [entry.target.id]: true }));
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
    );

    Object.values(refs.current).forEach((el) => {
      if (!el) return;
      activeObserver.observe(el);
      revealObserver.observe(el);
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>GenAI &amp; LLM Foundations</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div
        className="min-h-screen bg-[#EDEEE7] text-[#1B1B18]"
        style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
      >
        {/* Top bar */}
        <header
          className={`border-b border-[#1B1B18]/10 ${FADE} ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
            <span
              className="text-sm tracking-[0.2em] text-[#1B1B18]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              GEN·AI
            </span>
            <span className="text-xs text-[#8A8A7E]">Ask anything to AI</span>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pt-14 sm:px-10 sm:pt-20">
          <p
            className={`mb-4 text-xs uppercase tracking-[0.25em] text-[#3F7D6C] ${FADE} ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ fontFamily: "'JetBrains Mono', monospace", transitionDelay: mounted ? "80ms" : "0ms" }}
          >
            Module 01
          </p>
          <h1
            className={`text-4xl font-medium leading-[1.05] tracking-tight text-[#1B1B18] sm:text-6xl ${FADE} ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: mounted ? "150ms" : "0ms" }}
          >
            GenAI &amp; LLM
            <br />
            Foundations
          </h1>

          {/* Signature element: the tagline literally shown as tokens */}
          <div className="mt-8 flex flex-wrap items-end gap-1.5">
            {SAMPLE_TOKENS.map((t, i) => (
              <div
                key={i}
                className={`group relative ${FADE} ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: mounted ? `${350 + i * 90}ms` : "0ms" }}
              >
                <span
                  className="inline-block rounded-sm border border-[#2F3F63]/25 bg-white px-2.5 py-1.5 text-sm text-[#2F3F63] transition-colors duration-200 group-hover:border-[#2F3F63] group-hover:bg-[#2F3F63] group-hover:text-white"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {t.text}
                </span>
                <span
                  className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] text-[#8A8A7E] opacity-0 transition-opacity group-hover:opacity-100"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  id {t.id}
                </span>
              </div>
            ))}
          </div>
          <p
            className={`mt-9 max-w-md text-sm text-[#8A8A7E] ${FADE} ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: mounted ? "850ms" : "0ms" }}
          >
            Every word above is a token. Hover one to see the ID a model
            actually sees — that's concept 03 below, in action.
          </p>
        </section>

        {/* Content */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pb-24 pt-16 sm:px-10 md:grid-cols-[80px_1fr]">
          {/* Sticky index rail */}
          <nav className="hidden md:block">
            <ul
              className="sticky top-16 space-y-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`relative block text-sm transition-colors duration-300 ${
                      active === s.id
                        ? "text-[#2F3F63]"
                        : "text-[#8A8A7E] hover:text-[#1B1B18]"
                    }`}
                  >
                    <span
                      className={`absolute -left-4 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#3F7D6C] transition-opacity duration-300 ${
                        active === s.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {s.number}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="space-y-16">
            {SECTIONS.map((s) => (
              <article
                key={s.id}
                id={s.id}
                ref={(el) => {
                  refs.current[s.id] = el;
                }}
                className={`scroll-mt-16 border-t border-[#1B1B18]/10 pt-6 ${FADE} ${
                  visible[s.id] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="mb-2 flex items-baseline gap-3">
                  <span
                    className="text-xs text-[#3F7D6C]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.number}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.2em] text-[#8A8A7E]"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-medium tracking-tight text-[#1B1B18]">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#4A4A44]">
                  {s.body}
                </p>
                {s.id === "tokens" && <TokenFlow start={!!visible["tokens"]} />}
              </article>
            ))}
          </div>
        </div>





        <footer className="border-t border-[#1B1B18]/10 px-6 py-8 sm:px-10">
          <p
            className="text-xs text-[#8A8A7E]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            05 concepts · module 01 of a longer series
          </p>
        </footer>
      </div>
    </>
  );
};

export default Page;