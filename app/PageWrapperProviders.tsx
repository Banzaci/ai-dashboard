'use client'
import { PromptProvider } from '@/providers/PromptProvider';
import './globals.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Head from 'next/head';


export default function PageWrapperProviders({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <Head>
        <title>Laughing Goag Ghana</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <QueryClientProvider client={queryClient}>
          <PromptProvider>
          <div className='min-h-screen flex flex-col'>
            {children}
          </div>
          </PromptProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
