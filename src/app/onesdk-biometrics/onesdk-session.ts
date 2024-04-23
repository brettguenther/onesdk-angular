import { environment } from '../../environments/environment';
import {Buffer} from 'buffer';

export async function getSessionToken() {
    const customerReference = uuidv4();
  
    var response = await fetch(`${environment.FRANKIE_BFF_URL}/auth/v2/machine-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "machine " + Buffer.from(`${environment.CUSTOMER_ID}:${environment.CUSTOMER_CHILD_ID}:${environment.API_KEY}`).toString("base64"),
      },
      body: JSON.stringify({
        permissions: {
          preset: "one-sdk",
          // entityId: "YOUR_ENTITY_ID",
          reference: customerReference
        },
      }),
    })
    return response.headers.get('token');
  }
  
function uuidv4(): string {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: string) =>
    (Number(c) ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> Number(c) / 4).toString(16)
  );
}