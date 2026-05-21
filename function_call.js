import { client, DEFAULT_MODEL } from "./lib/openai.js";

const tools = [
  {
    type: "function",
    function: {
      name: "get_weather",
      description: "查詢即時天氣資訊",
    },
  },
];

const response = await client.chat.completions.create({
  model: DEFAULT_MODEL,
  messages: [{ role: "user", content: "請問台北現在天氣如何？" }],
  tools,
  tool_choice: "auto",
});

console.log(JSON.stringify(response.choices[0].message, null, 2));
