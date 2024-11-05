import type { FunctionComponent } from "react";
import { useFetcher } from "@remix-run/react";

import type { ContactRecord } from "~/data";

export const Favorite: FunctionComponent<{
  contact: Pick<ContactRecord, "favorite">;
}> = ({ contact }) => {
  const fetcher = useFetcher();
  const favorite = fetcher.formData
    ? fetcher.formData?.get("favorite") === "true"
    : contact.favorite;

  return (
    <fetcher.Form method="post" action={`favorite`}>
      <button
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
        name="favorite"
        value={favorite ? "false" : "true"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
};
