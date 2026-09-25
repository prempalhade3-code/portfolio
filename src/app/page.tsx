import experiences from "@/content/experiences.json";

type TextSegment = { type: "text"; value: string };
type LinkSegment = { type: "link"; value: string; href: string };
type Segment = TextSegment | LinkSegment;

const generateDescriptionSegments = (text = ""): Segment[] => {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const segments: Segment[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({
        type: "text",
        value: text.slice(lastIndex, match.index),
      });
    }
    segments.push({ type: "link", value: match[1], href: match[2] });
    lastIndex = linkPattern.lastIndex;
  }

  if (lastIndex < text.length) {
    segments.push({ type: "text", value: text.slice(lastIndex) });
  }

  if (!segments.length) {
    return [{ type: "text", value: text }];
  }

  return segments;
};

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="space-y-4" id="about">
        <h1 className="text-4xl font-semibold tracking-tight">Prem Palhade</h1>
        <div className="space-y-4 text-base leading-relaxed text-neutral-600">
          <p>
            I&apos;m a CSE undergraduate at{" "}
            <a
              href="https://www.vit.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors underline-offset-4 hover:text-gray-600"
            >
              VIT
            </a>
            , where I started programming from scratch at 17 and got a little
            sharper step by step once my first program finally ran.
          </p>
          <p>
            I&apos;m a pragmatic engineer with an eye for reliability. I
            interned at{" "}
            <a
              href="https://fossee.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors underline-offset-4 hover:text-gray-600"
            >
              Fossee, IIT Bombay
            </a>{" "}
            on verification infrastructure and at Not Sus Games on real-time
            multiplayer.
          </p>
          <p>
            I&apos;ve won five hackathons so far, usually after learning half the
            stack the same week.
          </p>
          <p>
            Outside of work, I love cooking, creating content, and tennis when
            the court is empty.
          </p>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="mb-4 text-lg font-semibold">Meaningful Experience</h2>

        <ol className="relative border-gray-300 border-s">
          {experiences.map((role, index) => {
            const segments = generateDescriptionSegments(role.description);

            return (
              <li key={`${role.date}-${index}`} className="mb-4 ms-4 last:mb-0">
                <div
                  className={[
                    "absolute w-3 h-3 rounded-full mt-2 -start-1.5 border border-white",
                    role.current ? "bg-orange-600" : "bg-gray-200",
                  ].join(" ")}
                />

                <time
                  className={[
                    "mb-1 text-xs leading-none",
                    role.current ? "text-orange-600" : "text-gray-500",
                  ].join(" ")}
                >
                  {role.current ? "Today" : role.date}
                </time>

                <p className="text-base text-gray-900">
                  {segments.map((segment, segmentIndex) =>
                    segment.type === "link" ? (
                      <a
                        key={`${role.date}-${segmentIndex}`}
                        href={segment.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline transition-colors underline-offset-4 hover:text-gray-600"
                      >
                        {segment.value}
                      </a>
                    ) : (
                      <span key={`${role.date}-${segmentIndex}`}>
                        {segment.value.split("\n").map((line, lineIndex, lines) => (
                          <span key={`${role.date}-${segmentIndex}-${lineIndex}`}>
                            {line}
                            {lineIndex < lines.length - 1 ? <br /> : null}
                          </span>
                        ))}
                      </span>
                    )
                  )}
                </p>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="mb-4 text-lg font-semibold">Contact</h2>
        <div className="space-y-3 text-base text-neutral-600">
          <p>
            For professional inquiries, you can reach me at
            <span className="block px-1.5 py-0.5 mt-1 text-sm rounded w-fit bg-neutral-200 text-neutral-900">
              prempalhade3 [at] gmail [dot] com
            </span>
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-medium text-neutral-900">
          <a
            href="https://www.linkedin.com/in/prem-palhade-353981349"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/prempalhade3-code"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://x.com/premwomp"
            className="underline underline-offset-4"
          >
            X (Twitter)
          </a>
        </div>
      </section>
    </div>
  );
}
