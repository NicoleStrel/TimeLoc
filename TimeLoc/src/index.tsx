import ForgeUI, {Macro, render} from "@forge/ui"

import {AppView} from "./app";
import {ConfigView, defaultConfig} from "./config";

//--------------------------run-------------------------
export const run = render(
  <Macro 
  config={<ConfigView />}
  app={<AppView />}
  defaultConfig={defaultConfig}
  />
);
