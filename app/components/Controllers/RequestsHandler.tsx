// pages/api/sendMessage.ts

import { NextApiRequest, NextApiResponse } from 'next';

interface Message {
  // Define the structure of your message here
  // For example:
  text: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Parse the JSON message from the request body
    const message: Message = req.body;

    // Assuming you have an API endpoint to send the message to
    const apiUrl = 'https://example.com/api/endpoint';

    // Send the message to the API
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    // Check if the response was successful
    if (response.ok) {
      // Parse the JSON response
      const jsonResponse = await response.json();
      
      // Return the JSON response
      return res.status(200).json(jsonResponse);
    } else {
      // Return an error if the response was not successful
      return res.status(response.status).json({ error: 'Failed to send message' });
    }
  } catch (error) {
    // Return an error if something went wrong
    return res.status(500).json({ error: 'Internal server error' });
  }
}
