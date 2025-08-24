'use server';
import { cookies } from 'next/headers';

import { createSession } from '../lib/session';

export async function login(formData: FormData) {
  const password = formData.get('password');
  if (password !== 'foo') {
    return {
      ok: false,
      errors: 'invalid password',
    };
  }
  await createSession('only_one_user_id');
  // Get nextUrl
  const cookiesObj = await cookies();
  const nextUrl = cookiesObj.get('nextUrl')?.value;
  cookiesObj.delete('nextUrl');
  return {
    ok: true,
    nextUrl,
  };
}
