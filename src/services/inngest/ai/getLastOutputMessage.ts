import { AgentResult } from "@inngest/agent-kit"

export function getLastOutputMessage(result: AgentResult) {
  console.log("Processing agent result:", JSON.stringify(result, null, 2));
  
  const lastMessage = result.output.at(-1)
  if (lastMessage == null) {
    console.log("No last message found in output");
    return;
  }
  
  console.log("Last message type:", lastMessage.type);
  
  if (lastMessage.type !== "text") {
    console.log("Last message is not text type");
    return;
  }
  
  // Handle different content formats
  if (typeof lastMessage.content === "string") {
    const content = lastMessage.content.trim();
    console.log("String content:", content);
    return content;
  } else if (Array.isArray(lastMessage.content)) {
    const content = lastMessage.content.join("\n").trim();
    console.log("Array content joined:", content);
    return content;
  } else {
    console.log("Unexpected content format:", lastMessage.content);
    return;
  }
}
