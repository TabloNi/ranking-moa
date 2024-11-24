import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectDeadline = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("November 30, 2024 23:59:59");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    console.log("Current time:", now);
    console.log("Target time:", targetDate);
    console.log("Difference in milliseconds:", difference);

    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    console.log("Time left:", timeLeft);

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="h-full w-full bg-primary pt-8 pb-1 relative overflow-hidden">
      <CardContent>
        <div className="text-4xl text-center font-semibold text-primary-foreground">
          프로젝트 마감일
        </div>
        <div className="grid grid-cols-2 gap-8 mt-10">
          {Object.entries(timeLeft).map(([label, value], index) => (
            <div key={`project-overview-${index}`} className="text-center">
              <div className="text-6xl font-semibold text-primary-foreground mb-1">
                {value}
              </div>
              <div className="text-3xl font-medium text-primary-foreground/60 ">
                {label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDeadline;