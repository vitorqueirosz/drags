import { prisma } from 'services/prisma';

import { NextApiRequest, NextApiResponse } from 'next';

export type User = {
  name: string;
  email: string;
};

export default async function handle(
  request: NextApiRequest,
  response: NextApiResponse,
): Promise<void> {
  const { name, email } = request.body;

  const user = await prisma.user.create({
    data: { name, email },
  });

  return response.json({ user });
}
