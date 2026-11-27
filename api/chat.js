import { OpenAI } from 'openai';
import axios from 'axios';
import { cvText } from './cvData.js';

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: 'https://api.groq.com/openai/v1',
});

const GROQ_MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-120b';

const sendPushNotification = async (message) => {
  if (!process.env.PUSHOVER_TOKEN || !process.env.PUSHOVER_USER) return null;
  try {
    const response = await axios.post('https://api.pushover.net/1/messages.json', {
      token: process.env.PUSHOVER_TOKEN,
      user: process.env.PUSHOVER_USER,
      message: message,
    });
    console.log('Pushover notification sent successfully');
    return response.data;
  } catch (error) {
    console.error('Error sending Pushover notification:', error.message);
    return null;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const SYSTEM_PROMPT = `You are Muhammad Noman Ashraf's AI Solutions Consultant on his portfolio website.
You are speaking with prospective clients, founders, and businesses looking for development or automation services.
Speak in the first person ("I", "my", "me") as Noman's assistant representing his practice.
Use ONLY the verified details below to answer questions:

Verified Details:
---
${cvText}
---

Strict Grounding & Response Rules:
1. Be consultative, clear, and concise. Format responses using clean Markdown **bold labels**, **short headings (###)**, and **bullet lists (-)**.
2. NEVER use Markdown tables (| col |) or raw HTML tags (<br>). Keep formatting mobile-friendly for a compact chat window.
3. NEVER guess, invent, or give unverified answers. Do NOT make up pricing, exact delivery dates, client names, metrics, or capabilities that are not explicitly stated in the Verified Details above.
4. Never mention or offer a resume/CV download.
5. If the user asks ANYTHING not explicitly verified in the details above (including custom pricing, exact timelines for their project, or unverified technical/personal questions):
   - Clearly state that you don't have that verified detail here, and tell them to contact Noman directly on **Email** ([nomi.devx@gmail.com](mailto:nomi.devx@gmail.com)) or **WhatsApp** ([+92 331 902 5470](https://wa.me/923319025470?text=Hi%20Noman%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.)) for an accurate answer.
6. Whenever the user provides their contact details, asks for a custom quote/proposal, or asks a question not covered by the verified details, call the tool "send_push_notification" with a clear summary (e.g. "Client Lead: [Name/Contact] - [Question/Project]").
`;

    const { messages } = req.body;

    const formattedMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages
    ];

    const tools = [
      {
        type: 'function',
        function: {
          name: 'send_push_notification',
          description: 'Send a push notification to Noman when the user provides contact details, asks for a quote, or asks an unverified question.',
          parameters: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                description: 'The message to send to Noman including the user contact details or unanswered question.',
              },
            },
            required: ['message'],
          },
        },
      },
    ];

    const completion = await openai.chat.completions.create({
      model: GROQ_MODEL,
      temperature: 0.2,
      messages: formattedMessages,
      tools: tools,
      tool_choice: 'auto',
    });

    const responseMessage = completion.choices[0].message;

    // Check if tool was called
    if (responseMessage.tool_calls) {
      for (const toolCall of responseMessage.tool_calls) {
        if (toolCall.function.name === 'send_push_notification') {
          const args = JSON.parse(toolCall.function.arguments);
          await sendPushNotification(args.message);

          formattedMessages.push(responseMessage);
          formattedMessages.push({
            tool_call_id: toolCall.id,
            role: 'tool',
            name: toolCall.function.name,
            content: 'Notification sent successfully to Noman.',
          });

          const finalCompletion = await openai.chat.completions.create({
            model: GROQ_MODEL,
            temperature: 0.2,
            messages: formattedMessages,
          });

          return res.status(200).json({ reply: finalCompletion.choices[0].message.content });
        }
      }
    }

    res.status(200).json({ reply: responseMessage.content });

  } catch (error) {
    console.error('Error during chat completion:', error);
    res.status(500).json({ error: 'An error occurred while communicating with the chatbot.' });
  }
}
