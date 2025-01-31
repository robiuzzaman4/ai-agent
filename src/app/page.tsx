import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <Button asChild>
        <Link href="/chat">Go to Chat</Link>
      </Button>
    </main>
  );
};

export default HomePage;
