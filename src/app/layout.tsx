import type { Metadata } from "next";

import '@rainbow-me/rainbowkit/styles.css'
import "./globals.css";
import { Provider as WagmiProvider } from '@/providers/WagmiProvider'
import { Box, Flex } from "@chakra-ui/react";
import Header from "@/components/header";



export const metadata: Metadata = {
  title: "Bobo Official Website",
  description: "Bobo Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body  >
        <WagmiProvider>
          <Flex flexDirection="column" minHeight="100vh">
            <Header />
            <Box as="main" flex={1} p={4} className="flex flex-col p-0">
              {children}
            </Box>
            {/* <Footer /> */}
          </Flex>
        </WagmiProvider>
      </body>
    </html>
  );
}
