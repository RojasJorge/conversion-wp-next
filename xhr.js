export const config = async _ => {
  return await fetch(process.env.NEXT_PUBLIC_LANDING_CONFIG, {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}

export default async path => {
  return await fetch(process.env.NEXT_PUBLIC_BASE_URL + path, {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}