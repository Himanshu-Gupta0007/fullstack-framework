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

const Page = () => {
  const [active, setActive] = useState(SECTIONS[0].id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );
    Object.values(refs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
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
        <header className="border-b border-[#1B1B18]/10">
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
            className="mb-4 text-xs uppercase tracking-[0.25em] text-[#3F7D6C]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Module 01
          </p>
          <h1 className="text-4xl font-medium leading-[1.05] tracking-tight text-[#1B1B18] sm:text-6xl">
            GenAI &amp; LLM
            <br />
            Foundations
          </h1>

          {/* Signature element: the tagline literally shown as tokens */}
          <div className="mt-8 flex flex-wrap items-end gap-1.5">
            {SAMPLE_TOKENS.map((t, i) => (
              <div key={i} className="group relative">
                <span
                  className="inline-block rounded-sm border border-[#2F3F63]/25 bg-white px-2.5 py-1.5 text-sm text-[#2F3F63] transition-colors group-hover:border-[#2F3F63] group-hover:bg-[#2F3F63] group-hover:text-white"
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
          <p className="mt-9 max-w-md text-sm text-[#8A8A7E]">
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
                    className={`block text-sm transition-colors ${
                      active === s.id
                        ? "text-[#2F3F63]"
                        : "text-[#8A8A7E] hover:text-[#1B1B18]"
                    }`}
                  >
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
                className="scroll-mt-16 border-t border-[#1B1B18]/10 pt-6"
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