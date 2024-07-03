// app/api/auth/signup.ts

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../utils/db';
import bcrypt from 'bcrypt';

interface SignUpInput {
  email: string;
  password: string;
  // Add additional fields as needed
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body as SignUpInput;

    // Validate email and password (add your own validation logic)

    try {
      // Check if user already exists in the database
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user in the database
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          // Add additional fields as needed
        },
      });

      // Return a success message or user data
      return res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating user:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    // Method Not Allowed
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
