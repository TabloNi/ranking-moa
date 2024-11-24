"use client"
import Image from "next/image";
import Link from "next/link";
import { SiteLogo } from "@/components/svg";
import { Button } from "@/components/ui/button";
import footerImage from "@/public/images/landing-page/footer.png"
import facebook from "@/public/images/social/facebook-1.png"
import dribble from "@/public/images/social/dribble-1.png"
import linkedin from "@/public/images/social/linkedin-1.png"
import github from "@/public/images/social/github-1.png"
import behance from "@/public/images/social/behance-1.png"
import twitter from "@/public/images/social/twitter-1.png"
import youtube from "@/public/images/social/youtube.png"

const Footer = () => {
  const socials = [
    {
      icon: facebook,
      href: "https://www.facebook.com/Codeshaperbd/"
    },
    {
      icon: github,
      href: "https://github.com/Codeshaper-bd"
    },
    {
      icon: linkedin,
      href: "https://www.linkedin.com/company/codeshaper/"
    },
    {
      icon: youtube,
      href: "https://www.youtube.com/@codeshaper4181"
    },
    {
      icon: twitter,
      href: "https://twitter.com/codeshaperbd"
    },
    {
      icon: dribble,
      href: "https://dribbble.com/codeshaperbd"
    },
    {
      icon: behance,
      href: "https://www.behance.net/codeshaper"
    }
  ]
  return (
    <footer
      className=" bg-cover bg-center bg-no-repeat relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-default-900/90 dark:before:bg-default-100"
      style={{
        background: `url(${footerImage.src})`
      }}
    >
      <div className="py-16 2xl:py-[120px]">
        <div className="max-w-[700px] mx-auto flex flex-col items-center relative">
          <Link
            href="/"
            className="inline-flex items-center gap-4 text-primary-foreground"
          >
            <SiteLogo className="w-[50px] h-[52px]" />
            <span className="text-3xl font-semibold">DashTail</span>
          </Link>
          <p className="text-base leading-7 text-default-200 dark:text-default-600 text-center mt-3">
            랭킹모아 서비스를 통해 수동으로 트래킹하던 제품 수집을 멈추고, 자동으로 모아진 데이터를 확인해 보세요! 광고 프로젝트 관리 및 할일 등 맞춤형 작업을 손쉽게 진행하실 수 있습니다. 지금 시도해 보세요!</p>
          <div className="mt-9 flex justify-center flex-wrap gap-4">
            <Button asChild variant="outline" className="rounded text-primary-foreground border-primary">
              <Link href="/dashboard" target="__blank">서비스 바로가기</Link>
            </Button>
            <Button asChild variant="outline" className="rounded text-primary-foreground border-primary">
              <Link href="/docs/introduction">공식 문서 확인하기</Link>
            </Button>
            <Button asChild variant="outline" className="rounded text-primary-foreground border-primary">
              <Link href="https://1.envato.market/dashtail-regular" target="__blank">로그인</Link>
            </Button>
          </div>
          <div className="mt-8 flex items-center justify-center flex-wrap gap-5">
            {
              socials.map((item, index) => (
                <Link
                  href={item.href}
                  key={`social-link-${index}`}
                  target="_blank"
                >
                  <Image src={item.icon} alt="social" width={30} height={30} priority={true} />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
      <div className="relative bg-default-900 dark:bg-default-50 py-6">
        <div className="container flex flex-col text-center md:text-start md:flex-row gap-2">

        </div>
      </div>
    </footer>
  );
};

export default Footer;