import { db } from "../../utils/db.mjs";
import { sendResponse } from "../../utils/response.mjs";

export const handler = async (event) => {
  const data = await db.query({
    TableName: "todosTable",
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": "TODO",
    },
  });

  return sendResponse(200, data.Items);
};
