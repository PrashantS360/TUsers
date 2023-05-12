// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  let response = await fetch(`https://602e7c2c4410730017c50b9d.mockapi.io/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const users = await response.json();
  res.status(200).json({ users});
}
