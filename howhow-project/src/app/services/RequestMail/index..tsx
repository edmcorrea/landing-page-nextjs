const baseURL = 'http://localhost:3001';

export const requestMail = async (endpoint: string, body: IContact) => {
  const response = await fetch(`${baseURL}${endpoint}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  await response.json()
};