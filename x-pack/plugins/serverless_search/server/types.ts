/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { DataViewsServerPluginStart } from '@kbn/data-views-plugin/server';
import type { SecurityPluginStart } from '@kbn/security-plugin/server';
import type { ServerlessPluginSetup } from '@kbn/serverless/server';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ServerlessSearchPluginSetup {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ServerlessSearchPluginStart {}

export interface StartDependencies {
  dataViews: DataViewsServerPluginStart;
  security: SecurityPluginStart;
}
export interface SetupDependencies {
  serverless: ServerlessPluginSetup;
}
