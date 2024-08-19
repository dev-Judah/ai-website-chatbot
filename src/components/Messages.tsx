import { type Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";
interface MessagesProps {
  messages: TMessage[];
}
const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length > 0 ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center gap-2 py-1">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-medium  text-white text-xl ">
            {" "}
            You are all set!
          </h3>
          <p>Ask your first question to get started.</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
