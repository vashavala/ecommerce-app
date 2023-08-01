import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skq1ghgT9oEUznAZD7Tcy0JkzEuE3742TMwec2cRzCY1ELPmSGuqXQqwVeGFIu6IpJfyarndCKGpkm938f5CbiSeS1dh3jT8eRFWyA1F0JUYE8kJgj5t9FGGb6eyPgXX60cqlXTbOCzQa43JU9r5e4mXynsZJUCfOO0GES8XyyPhvOmXanT3"
})
