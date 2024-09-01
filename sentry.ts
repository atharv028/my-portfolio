import * as Sentry from "@sentry/react";

const sentry = Sentry.init({
  dsn: "https://9c79cf116abc136f400e529fc623f8f1@o4507871913246720.ingest.us.sentry.io/4507871917047808",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      themeLight: {
        background: "#cccccc",
      },
      themeDark: {
        background: "#000319",
      },
      showBranding: false
    }),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

export default sentry;
