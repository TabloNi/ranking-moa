import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ScreenShot from "@/public/images/landing-page/screenshot.png";
import DashboardSceenshot from "@/public/images/landing-page/dashboard-screenshot.png";
import ProfileScreenShot from "@/public/images/landing-page/profile-screenshot.png";
import CalenderScreenshot from "@/public/images/landing-page/calender-screenshot.png";

const Hero = () => {
  return (
    <section
      className="bg-[url(https://dashboi-one.vercel.app/images/home/hero-bg.png)] bg-cover bg-no-repeat relative"
      id="home"
    >
      <div className="bg-gradient-to-b from-primary/30 to-[#fff] dark:from-primary/20 dark:to-[#0F172A]">
        <div className="container">
          <div className=" relative z-10">
            <div className="pt-32 md:pt-48">
              <h1 className="max-w-[600px] mx-auto text-xl md:text-2xl xl:text-4xl xl:leading-[52px] font-semibold text-default-900 text-center">
                <span className="text-primary">랭킹 모아</span> - 마케터를 위한 커머스 랭킹 트레킹
                및 프로젝트 관리 플랫폼
              </h1>
              <p className="text-base leading-7 md:text-lg md:leading-8 text-default-700 text-center mt-5 max-w-[800px] mx-auto">
              랭킹모아 서비스를 통해 수동으로 트래킹하던 제품 수집을 멈추고, 자동으로 모아진 데이터를 확인해 보세요! 광고 프로젝트 관리 및 할일 등 맞춤형 작업을 손쉽게 진행하실 수 있습니다.
              지금 시작해 보세요!</p>
            
              <div className="flex mt-9 justify-center gap-4 lg:gap-8">
                <Button asChild size="xl">
                  <Link href="/auth/login"> 서비스 바로가기 </Link>
                </Button>
                <Button asChild variant="outline" size="xl">
                  <Link href="https://dash-tail.vercel.app/docs/introduction" target="_blank">
                    문서 확인하기
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <Image
            src={DashboardSceenshot}
            className="relative lg:hidden mt-10" priority={true}
            alt="screenshot"
          />
          <div className="relative  -mt-20 hidden lg:block">
            <Image src={ScreenShot} alt="screenshot" priority={true} />
            <motion.div
              className="absolute left-[11%] 2xl:bottom-5 xl:bottom-10 lg:bottom-2 2xl:w-[280px] xl:w-[250px] lg:w-[200px]"
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <Image
                src={ProfileScreenShot}
                alt="screenshot"
                className="max-w-full h-full"
                priority={true}
              />
            </motion.div>
            <motion.div
              className="absolute right-0 2xl:top-[320px] 2xl:w-[370px] xl:top-[296px] xl:w-[340px] top-[220px] w-[280px]"
              animate={{
                y: [0, 7, 0],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <Image
                src={CalenderScreenshot}
                alt="screenshot"
                className="max-w-full h-full"
                priority={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
