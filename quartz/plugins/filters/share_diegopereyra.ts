import { QuartzFilterPlugin } from "../types"

export const ShareDiegoPereyra: QuartzFilterPlugin = () => ({
  name: "ShareDiegoPereyra",
  shouldPublish(_ctx, [_tree, vfile]) {
    let publishflag = vfile.data?.frontmatter?.publish ?? false
    let content_folder_root = !(vfile.data?.filePath?.includes('content/a/') ?? false)
    return publishflag || content_folder_root
  },
})
