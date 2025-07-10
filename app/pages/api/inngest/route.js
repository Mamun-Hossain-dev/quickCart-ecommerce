import { serve } from "inngest/next";
import { inngest } from "@/config/inngest/client"; // just the client
import {
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdate,
} from "@/config/inngest/functions"; // import functions separately

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdate, syncUserDeletion],
});
