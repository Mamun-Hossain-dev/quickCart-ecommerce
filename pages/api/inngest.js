import { serve } from "inngest/next";
import { inngest } from "@/config/inngest/client";
import {
  syncUserCreation,
  syncUserUpdate,
  syncUserDeletion,
} from "@/config/inngest/functions";

export default serve({
  client: inngest,
  functions: [syncUserCreation, syncUserUpdate, syncUserDeletion],
});
