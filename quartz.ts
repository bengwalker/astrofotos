import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"
 
// Must be placed before loadQuartzConfig()
ExternalPlugin.BasesPage({
  defaultViewType: "gallery",
  linkResolution: "relative",
  customViews: {
    myView: ({ entries, view, basesData, total, locale }) => {
      // return JSX
    },
  },
})
const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()