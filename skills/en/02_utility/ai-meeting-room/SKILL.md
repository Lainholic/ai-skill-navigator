---
name: ai-meeting-room
description: Build a local AI meeting room where users can watch multiple models discuss and guide the conversation.
license: MIT
---

# Build an AI Meeting Room

When the user asks for an AI meeting room, write the application source code according to the requirements below and explain how to run it. Respect the user's requested features and environment; otherwise default to a simple local web app with an English interface suited to the user's current platform.

## Quickstart (Ready-to-Use Reference Example)

If the user wants an immediately working meeting room without authoring code, or requests a verified reference, guide them to run or copy the standalone zero-dependency local web app in `examples/` (`server.py`, `index.html`, `app.js`, `style.css`, `start.bat`). Only build from scratch if the user specifies custom frameworks, bespoke styling, or tailored integrations.

## What to build

- Let the user choose a topic, 2–4 participant names, AI providers and models, and 1–20 rounds. One round means each participant speaks once.
- Send earlier responses to the next participant and label each response with its participant name, actual provider, and model. Display each completed response as it arrives.
- Automatic mode continues after a moderator summary each round. Manual mode pauses after every round for the user to review and optionally direct the next one. Identify which model produces summaries.
- Let the user stop the meeting and choose whether to ask, stop, or continue when a participant or summary fails. Never show a failed response as successful.
- Save the transcript on request as a readable file such as HTML. Warn before a new meeting or closing the page can discard an unsaved transcript.
- Provide provider and model selection and separate input fields for each user's own API keys. Default candidates are OpenAI, DeepSeek, Nebius, Azure OpenAI, and Vertex AI Express unless the user specifies a different scope. Guide the user to official key-creation and pricing information.
- Never ask the user to paste API keys into chat or command-line arguments. Do not write keys to source files, repositories, transcripts, or logs; send them only to the selected provider when the user starts a request.
- Estimate cost using each participant's entered input/output rates and the provider's reported usage. Include moderator calls and mark missing rates, missing usage, failures, and interrupted requests as unknown.
- Label the amount as an estimate, not a bill, and explain that cache discounts, contract terms, and taxes may differ. Explain that meeting topics and prior responses are sent to selected providers and may incur API charges.
- Include a key-free test mode. Make it clear on screen and in saved records that its messages are simulated, not real AI responses.

## Implementation and verification

1. Write the application source in a location that does not conflict with existing work. Do not deploy, push, or overwrite existing files without the user's direction.
2. Consult current official provider documentation for the selected APIs and authentication methods. Do not conceal provider differences, such as Azure deployments and Vertex authentication, or claim unverified connections work. Clearly mark any connection whose documentation or authentication cannot be verified.
3. Bind a local server to loopback, defend against unauthorized cross-origin requests, and do not send API keys to arbitrary URLs or redirects. Render user and AI text without executing it as code.
4. Preserve the transcript on waits, errors, and stops. Explain that requests already sent may still be processed or billed after stopping.
5. Without spending API credits, use mock responses to run at least two participants for two rounds and verify context sharing, round summaries, user guidance, error choices, cost calculation, and HTML export.
6. Use real providers or keys only within the user's requested scope. Report verified behavior separately from untested providers and platforms, and deliver the generated program with run instructions.

The skill is MIT-licensed. The generated application's license follows the user's choice; providers and models have separate terms.
