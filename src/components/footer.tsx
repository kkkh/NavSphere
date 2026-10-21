import Link from 'next/link'
import { Icons } from '@/components/icons'
import type { SiteConfig } from '@/types/site'

interface FooterProps {
  siteInfo: SiteConfig
}

export function Footer({ siteInfo }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center gap-4 md:h-16 md:flex-row md:justify-center">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            {currentYear} {siteInfo.basic.title}. All rights reserved.
          </p>
        </div>
      </div>

      {/* 备案信息：ICP备案与公安联网备案，置于页脚显著位置 */}
      <div className="container mt-2 flex flex-col items-center justify-center gap-y-2 text-xs text-muted-foreground max-[359px]:pb-16 sm:flex-row sm:flex-wrap sm:gap-x-4 md:mt-0 md:pb-4">
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="whitespace-nowrap rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          晋ICP备2023020746号-2
          <span className="sr-only">（在新窗口打开）</span>
        </a>
        <a
          href="https://beian.mps.gov.cn/#/query/webSearch?code=14010602111139"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <img
            src="/beian.png"
            alt="公安备案"
            width={20}
            height={20}
            className="h-5 w-5 shrink-0"
          />
          <span>晋公网安备14010602111139号</span>
          <span className="sr-only">（在新窗口打开）</span>
        </a>
      </div>
    </footer>
  )
}
