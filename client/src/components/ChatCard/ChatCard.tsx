import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Text,
  ScrollArea,
  Stack,
  Box,
  TextInput,
  Button,
  Group,
  Image,
} from "@mantine/core";

const initialMessages: IChatMessage[] = [
  {
    id: 1,
    text: "Hey! How are you?",
    from: "me",
    timestamp: new Date(),
  },
  {
    id: 2,
    text: "I'm good, thanks! How about you?",
    from: "them",
    timestamp: new Date(),
  },
  {
    id: 3,
    text: "Doing well! Just working on a project.",
    from: "me",
    timestamp: new Date(),
  },
  {
    id: 4,
    text: "That's great! What project?",
    from: "them",
    timestamp: new Date(),
  },
];

const ChatWindow = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");
  const scrollAreaRef = useRef(null); // Reference to the ScrollArea

  const sendMessage = () => {
    if (newMessage.trim() !== "") {
      const messageToSend: IChatMessage = {
        id: messages.length + 1,
        text: newMessage,
        from: "me",
        timestamp: new Date(),
      };

      setMessages((prevMessages: IChatMessage[]) => [
        ...prevMessages,
        messageToSend,
      ]);
      setNewMessage("");
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the scroll area when messages update
    console.log("Message Updated!");
  }, [messages]);

  return (
    <Card
      style={{
        width: "400px",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--card-background-color)",
      }}
    >
      <Text
        fw={500}
        size="lg"
        style={{ paddingBottom: "5px", borderBottom: "1px solid whitesmoke" }}
      >
        Chat
      </Text>
      <ScrollArea style={{ flex: 1 }} ref={scrollAreaRef}>
        <Stack mt="lg" mx="md">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </Stack>
      </ScrollArea>
      <Group mt="md" mx="md">
        <TextInput
          value={newMessage}
          onChange={(event) => setNewMessage(event.currentTarget.value)}
          placeholder="Type a message..."
          style={{ flex: 1 }}
        />
        <Button onClick={sendMessage}>Send</Button>
      </Group>
    </Card>
  );
};
interface IChatMessage {
  id?: number;
  from: "me" | "them";
  text: string;
  timestamp: Date;
}
interface ChatMessageProps {
  message: IChatMessage;
}
const ChatMessage = ({ message }: ChatMessageProps) => {
  const isMyMessage = message.from === "me";

  return (
    <Box
      style={{
        alignSelf: isMyMessage ? "flex-end" : "flex-start",
        backgroundColor: isMyMessage ? "#007AFF" : "#FFFFFF", // Primary color for "me" messages
        color: isMyMessage ? "#FFFFFF" : "#000000", // White text for "me" messages
        borderRadius: "5px",
        padding: "12px 16px", // Adjusted padding for better appearance
        maxWidth: "75%",
        marginBottom: "0", // Space between messages
        boxShadow: "0 1px 5px rgba(0,0,0,0.1)",
        position: "relative",
      }}
    >
      <Text size="sm">{message.text}</Text>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <Text
          size="xs"
          c={isMyMessage ? "white" : "dimmed"}
          style={{ fontSize: "10px" }}
        >
          {message.timestamp.toLocaleDateString()}
        </Text>
      </Box>
    </Box>
  );
};
export default ChatWindow;
