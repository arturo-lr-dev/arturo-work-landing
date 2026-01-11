import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="heading-1 gradient-text mb-8">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="heading-2 text-text-primary mt-12 mb-6">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="heading-3 text-text-primary mt-8 mb-4">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-text-secondary leading-relaxed mb-6">{children}</p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-primary hover:text-secondary underline underline-offset-4 transition-colors"
      >
        {children}
      </a>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-text-secondary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside space-y-2 mb-6 text-text-secondary">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-text-secondary">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-text-secondary my-6">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-surface-card px-2 py-1 rounded text-sm font-mono text-primary">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-surface-card p-4 rounded-xl overflow-x-auto mb-6 border border-white/5">
        {children}
      </pre>
    ),
    hr: () => <hr className="border-white/10 my-12" />,
    img: ({ src, alt }) => (
      <img
        src={src}
        alt={alt}
        className="rounded-xl my-8 w-full"
      />
    ),
    ...components,
  };
}
