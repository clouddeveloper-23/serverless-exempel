export function sendResponse(statusCode, body) {
  return {
    statusCode: statusCode || 200,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}
