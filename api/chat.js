import { OpenAI } from 'openai';
import axios from 'axios';
import { cvText } from './cvData.js';

const openai = new OpenAI({
  apiKey: process.env.DEEPSEEK_API_KEY,
  baseURL: 'https://api.deepseek.com/v1',
});

const sendPushNotification = async (message) => {
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
    throw error;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const SYSTEM_PROMPT = `You are a helpful and professional AI assistant for Noman Ashraf's portfolio website. 
Your primary job is to answer visitors' questions using ONLY the information found in Noman's CV provided below.

Noman's CV:
---
${cvText}
---

Rules:
1. Answer questions clearly, professionally, and concisely based ONLY on the CV.
2. If the user asks a question that is NOT answered in the CV, you must say that you don't know, and ask the user to provide their contact details (name and email or phone) so Noman can get back to them.
3. If the user asks a question not covered by the CV, OR if the user provides their contact details, you MUST call the tool "send_push_notification".
4. When calling "send_push_notification", provide a clear message for Noman. For example, "A user asked: [Question]. I didn't know the answer." or "A user left contact details: [Details]".
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
          description: 'Send a push notification to Noman. Use this tool if the user asks a question you cannot answer based on the CV, or if the user provides their contact details.',
          parameters: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                description: 'The message to send to Noman. Be descriptive (e.g. Include the user contact details or the unanswered question).',
              },
            },
            required: ['message'],
          },
        },
      },
    ];

    const completion = await openai.chat.completions.create({
      model: 'deepseek-chat',
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
          
          // Respond back to user
          formattedMessages.push(responseMessage);
          formattedMessages.push({
            tool_call_id: toolCall.id,
            role: 'tool',
            name: toolCall.function.name,
            content: 'Notification sent successfully to Noman.',
          });

          // Get the final text response from DeepSeek
          const finalCompletion = await openai.chat.completions.create({
            model: 'deepseek-chat',
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
