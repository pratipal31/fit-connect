import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  try {
    // Authenticate user with Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if the user exists in the database
    const existingUser = await prisma.user.findUnique({
      where: { email: user.email as string },
    });

    if (!existingUser) {
      return res.status(404).json({ message: 'User not found in database' });
    }

    res.status(200).json({ message: 'User logged in successfully', user: existingUser });
  } catch (error) {
    console.error(error);
    const errorMessage = (error as any).message;
    res.status(500).json({ message: 'Error logging in user', error: errorMessage });
  }
}
