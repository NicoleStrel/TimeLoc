import ForgeUI, {Macro, render} from "@forge/ui"

import {AppView} from "./app";
import {ConfigView} from "./config";  

export const run = render(
  <Macro 
    app={<AppView />}
    config={<ConfigView />}
    defaultConfig={{
      title: "TimeLoc",
      clock: "24hr",
    }}
  />
);


    