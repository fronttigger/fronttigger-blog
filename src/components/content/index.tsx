import React from 'react'
import { getMDXComponent } from 'mdx-bundler/client'

import MDXComponents from '#components/shared/MDX'

function Content({ code }: { code: string }) {
  const Component = React.useMemo(() => getMDXComponent(code), [code])

  return <Component components={MDXComponents} />
}

export default Content
