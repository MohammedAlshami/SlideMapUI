'use client';
import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const fetchOpenAIResponse = async (message: string | number | boolean) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/api/ask`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from the local API endpoint');
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error fetching response from local API:', error);
      throw error;
    }
  };

  const sendMessage = async () => {
    try {
      const responseData = await fetchOpenAIResponse(message);
      setResponse(responseData);
    } catch (error) {
      setError(`Error sending message: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <div className="mb-4">
        <label className="block mb-2" htmlFor="message">Enter Message:</label>
        <input
          className="border border-gray-400 p-2 rounded w-full"
          type="text"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
          onClick={sendMessage}
        >
          Send Message
        </button>
      </div>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
          {error}
        </div>
      )}
      {response && (
        <div>
          <h2 className="text-xl font-bold mb-2">Response:</h2>
          <pre className="bg-gray-200 p-4 rounded">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
