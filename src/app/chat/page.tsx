import React from "react";
import { Chat } from "../actions/chat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ChatPage = () => {
  const handleAction = async () => {
    "use server";
    const res = await Chat("Write a vegetarian lasagna recipe for 4 people.");

    console.log("res: ", res);
  };

  return (
    <main className="min-h-screen w-full max-w-screen-md mx-auto border-x relative">
      <form
        action={handleAction}
        className="absolute bottom-0 h-14 w-full flex items-center justify-center gap-2 border-t px-4"
      >
        <Input type="text" placeholder="Say Somthing.." />
        <Button>Send Message</Button>
      </form>
    </main>
  );
};

export default ChatPage;
