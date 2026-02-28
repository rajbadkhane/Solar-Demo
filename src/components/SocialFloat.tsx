export function SocialFloat() {
  return (
    <>
      <div className="pointer-events-none fixed left-1 top-[58%] z-40 flex -translate-y-1/2 flex-col gap-2 sm:left-2 sm:top-1/2">
        <a
          className="pointer-events-auto grid h-16 w-11 place-items-center rounded-xl border border-blue-200 bg-white text-[#1877F2] shadow-lg animate-pulse hover:-translate-y-1 sm:h-20 sm:w-12"
          href="https://www.facebook.com/share/1HNfojRJw8/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V5c-.2 0-1.1-.1-2.2-.1-2.2 0-3.7 1.4-3.7 3.9V11H8v3h2.5v7h3Z" />
          </svg>
        </a>
      </div>
      <div className="pointer-events-none fixed right-1 top-[58%] z-40 flex -translate-y-1/2 flex-col gap-2 sm:right-2 sm:top-1/2">
        <a
          className="pointer-events-auto grid h-16 w-11 place-items-center rounded-xl border border-emerald-200 bg-white text-[#25D366] shadow-lg animate-pulse hover:-translate-y-1 sm:h-20 sm:w-12"
          href="https://wa.me/919198947535"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
            <path d="M20.5 12a8.5 8.5 0 0 1-12.4 7.5L4 20l.6-3.8A8.5 8.5 0 1 1 20.5 12Zm-8.5-7A7 7 0 0 0 5.9 15.7l.2.4-.4 2.3 2.4-.7.4.2A7 7 0 1 0 12 5Zm3.9 8.8c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1l-.4.5c-.1.2-.3.2-.5.1-.2-.1-.9-.3-1.7-1-.6-.6-1.1-1.3-1.2-1.5-.1-.2 0-.3.1-.4l.3-.4.2-.3.1-.3c0-.1 0-.3-.1-.4l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4c-.1 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.4c.1.1 1.5 2.3 3.6 3.2.5.2.9.4 1.3.5.5.1 1 .1 1.4.1.4-.1 1.3-.5 1.4-1 .2-.6.2-1 .1-1.1Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
