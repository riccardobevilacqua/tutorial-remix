import type { ActionFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { updateContact } from "~/data";

export const action = async ({
  request,
  params,
}: ActionFunctionArgs) => {
  invariant(params.contactId, "Missing contactId");
  const formData = await request.formData();

  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}; 