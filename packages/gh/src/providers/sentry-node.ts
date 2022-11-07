import * as Sentry from "@sentry/node";
import {gh_context_provider} from "../types";
import createSentryProvider from "../utils/createSentryProvider";

export default (config: any = {}): gh_context_provider => createSentryProvider(Sentry, config);
